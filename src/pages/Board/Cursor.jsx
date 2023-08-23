import React, { useEffect, useRef, useState } from "react";

function useEventListener(eventName, handler, element = document) {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event) => savedHandler.current(event);

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

function AnimatedCursor({
  color = "220, 90, 90",
  outerAlpha = 0.4,
  innerSize = 8,
  outerSize = 8,
  outerScale = 5,
  innerScale = 0.7,
}) {
  const cursorOuterRef = useRef();
  const cursorInnerRef = useRef();
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isActiveClickable, setIsActiveClickable] = useState(false);
  const endX = useRef(0);
  const endY = useRef(0);

  const onMouseMove = (event) => {
    const { clientX, clientY } = event;
    setCoords({ x: clientX, y: clientY });
    cursorInnerRef.current.style.top = clientY + "px";
    cursorInnerRef.current.style.left = clientX + "px";
    endX.current = clientX;
    endY.current = clientY;
  };

  const animateOuterCursor = (time) => {
    if (previousTimeRef.current !== undefined) {
      coords.x += (endX.current - coords.x) / 8;
      coords.y += (endY.current - coords.y) / 8;
      cursorOuterRef.current.style.top = coords.y + "px";
      cursorOuterRef.current.style.left = coords.x + "px";
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateOuterCursor);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const onMouseDown = () => setIsActive(true);
  const onMouseUp = () => setIsActive(false);
  const onMouseEnter = () => setIsVisible(true);
  const onMouseLeave = () => setIsVisible(false);

  useEventListener("mousemove", onMouseMove, document);
  useEventListener("mousedown", onMouseDown, document);
  useEventListener("mouseup", onMouseUp, document);
  useEventListener("mouseenter", onMouseEnter, document);
  useEventListener("mouseleave", onMouseLeave, document);

  useEffect(() => {
    if (isActive) {
      cursorInnerRef.current.style.transform = `scale(${innerScale})`;
      cursorOuterRef.current.style.transform = `scale(${outerScale})`;
    } else {
      cursorInnerRef.current.style.transform = "scale(1)";
      cursorOuterRef.current.style.transform = "scale(1)";
      document.body.style.cursor = "none";
    }
  }, [innerScale, outerScale, isActive]);

  useEffect(() => {
    if (isActiveClickable) {
      cursorInnerRef.current.style.transform = `scale(${innerScale * 1.3})`;
      cursorOuterRef.current.style.transform = `scale(${outerScale * 1.4})`;
      document.body.style.cursor = "auto";
    }
  }, [innerScale, outerScale, isActiveClickable]);

  useEffect(() => {
    if (isVisible) {
      cursorInnerRef.current.style.opacity = "1"; // 수정: 문자열로 설정
      cursorOuterRef.current.style.opacity = "1"; // 수정: 문자열로 설정
    } else {
      cursorInnerRef.current.style.opacity = "0"; // 수정: 문자열로 설정
      cursorOuterRef.current.style.opacity = "0"; // 수정: 문자열로 설정
    }
  }, [isVisible]);

  const cursorStyles = {
    cursorOuter: {
      zIndex: 999,
      position: "fixed",
      opacity: "1", // 수정: 문자열로 설정
      pointerEvents: "none",
      transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
    },
    cursorInner: {
      position: "fixed",
      borderRadius: "50%",
      width: `${innerSize}px`, // 수정: 픽셀 단위로 설정
      height: `${innerSize}px`, // 수정: 픽셀 단위로 설정
      pointerEvents: "none",
      backgroundColor: `rgba(${color}, 1)`,
      transition: "opacity 0.15s ease-in-out, transform 0.25s ease-in-out",
    },
  };

  return (
    <>
      <div ref={cursorOuterRef} style={cursorStyles.cursorOuter} />
      <div ref={cursorInnerRef} style={cursorStyles.cursorInner} />
    </>
  );
}

function Cursor() {
  return (
    <div className="App">
      <AnimatedCursor />
      {/* 나머지 컨텐츠 */}
    </div>
  );
}

export default Cursor;
