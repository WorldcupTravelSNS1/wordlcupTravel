import React from "react";
import styled from "styled-components";
import Cursor from "./cursor/Cursor";
function Cover() {
  return (
    <>
      <Cursor />
      <Container id="home">
        <CoverVideo>
          <Video
            autoPlay
            muted
            loop
            src={require("../assets/main.mp4")}
            type="video/mp4"
          />
        </CoverVideo>
        <CoverBody>
          <CoverTitle>여러분들이 좋아하는 여행지를</CoverTitle>
          <CoverTitle>정확히 알고 계시나요?</CoverTitle>
          <CoverTextu>우리는 여러분들의 행복한 여행을 응원합니다</CoverTextu>
          <CoverText>여러분의 만족은 우리의 최우선 순위입니다</CoverText>
          <CoverButton href="/">Discover More</CoverButton>
        </CoverBody>
        <BottomFade />
      </Container>
    </>
  );
}

export default Cover;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CoverVideo = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const BottomFade = styled.div`
  position: absolute;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 4%,
    rgba(255, 255, 255, 0.5032606792717087) 77%,
    rgba(255, 255, 255, 1) 89%
  );
  top: 91vh;
  width: 100vw;
  height: 10vh;
  z-index: 9998;
`;

const CoverBody = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 16px;
`;
const CoverTitle = styled.div`
  color: white;
  font-weight: 800;
  font-size: 7vh;
  text-align: center;
  line-height: 65px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;
const CoverText = styled.div`
  color: white;
  font-weight: 600;
  line-height: 35px;
`;

const CoverTextu = styled.div`
  // cover text upper
  color: white;
  padding-top: 5vh;
  @media (max-width: 480px) {
    padding-top: 2vh;
  }
`;

const CoverButton = styled.a`
  cursor: pointer;
  clear: both;
  border-radius: 3px;
  padding: 20px 60px;
  margin-top: 4vh;
  display: inline-block;
  color: white;
  transition: all 0.8s, color 0.3s 0.3s;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  cursor: pointer;
  background: #04a551;
  color: white;
  :hover {
    box-shadow: -300px 0 0 0 rgb(120, 178, 167) inset;
  }
  @media (max-width: 480px) {
    padding: 10px 60px;
    margin-top: 3vh;
  }
`;
