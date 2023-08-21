// import React, { useEffect, useState } from "react";
// import { gsap } from "gsap";
// import CircleType from "circletype";

// const CursorEffect = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     setMousePosition({ x: e.clientX, y: e.clientY });
//   };

//   useEffect(() => {
//     const cursorOuter = document.querySelector(".cursor--large");
//     const cursorInner = document.querySelector(".cursor--small");
//     const cursorTextContainerEl = document.querySelector(".cursor--text");
//     const cursorTextEl = cursorTextContainerEl.querySelector(".text");

//     const hoverItems = document.querySelectorAll(".cursor-hover-item");
//     const hoverEffectDuration = 0.3;
//     let isHovered = false;

//     let circleType = new CircleType(cursorTextEl);
//     circleType.radius(50);

//     hoverItems.forEach((item) => {
//       item.addEventListener("pointerenter", handlePointerEnter);
//       item.addEventListener("pointerleave", handlePointerLeave);
//     });

//     document.body.addEventListener("pointermove", updateCursorPosition);

//     function updateCursorPosition(e) {
//       handleMouseMove(e);
//     }

//     function updateCursor() {
//       gsap.set([cursorInner, cursorTextContainerEl], {
//         x: mousePosition.x,
//         y: mousePosition.y,
//       });

//       gsap.to(cursorOuter, {
//         duration: 0.2,
//         x: mousePosition.x,
//         y: mousePosition.y,
//       });

//       if (!isHovered) {
//         gsap.to(cursorTextContainerEl, hoverEffectDuration * 0.5, {
//           opacity: 0,
//         });
//         gsap.set(cursorTextContainerEl, {
//           rotate: 0,
//         });
//       }

//       requestAnimationFrame(updateCursor);
//     }

//     updateCursor();

//     function handlePointerEnter() {
//       isHovered = true;
//       // handlePointerEnter의 내용 구현
//     }

//     function handlePointerLeave() {
//       isHovered = false;
//       // handlePointerLeave의 내용 구현
//     }
//   }, [mousePosition]);

//   return (
//     <div>
//       <div
//         className="cursor cursor--large"
//         style={{
//           position: "absolute",
//           top: `${mousePosition.y}px`,
//           left: `${mousePosition.x}px`,
//         }}
//       ></div>
//       <div
//         className="cursor cursor--small"
//         style={{
//           position: "absolute",
//           top: `${mousePosition.y}px`,
//           left: `${mousePosition.x}px`,
//         }}
//       ></div>
//       <div className="cursor--text">
//         <div className="text">Hello</div>
//       </div>
//       {/* 나머지 커서 효과 관련 JSX */}
//     </div>
//   );
// };

// export default CursorEffect;
