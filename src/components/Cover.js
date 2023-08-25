import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cursor from "./cursor/Cursor";
import { useNavigate } from "react-router";

function Cover() {

  const nav = useNavigate();

  const goToWorldcup = () => {
    const urls = [
      "/worldcup/europe",
      "/worldcup/seasia",
      "/worldcup/eastasia",
      "/worldcup/ncsamerica"
    ];

    const randomIndex = Math.floor(Math.random() * urls.length);
    const randomUrl = urls[randomIndex];

    nav(randomUrl);
  };


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
          <CoverTitle>무작정 떠나지말고</CoverTitle>
          <CoverTitle>작정하고 떠나라</CoverTitle>
          <CoverTextu>🚀어느 나라로?🚀</CoverTextu>
          <CoverText>여행지 월드컵 해보던가</CoverText>

          <StyledButton onClick={goToWorldcup}>
            <BtnText>READY?</BtnText>
            <BtnTwo>
              <BtnText2>GO!</BtnText2>
            </BtnTwo>
          </StyledButton>

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

const StyledButton = styled.button`
  background: #3D4C53;
  margin: 20px auto;
  width: 200px;
  height: 50px;
  overflow: hidden;
  text-align: center;
  transition: 0.2s;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  position: relative;

  &:hover {
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.3);
    .btnTwo {
      left: -130px;
    }
    .btnText {
      margin-left: 65px;
    }
  }

  &:active {
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.3);
  }
`;

const BtnTwo = styled.div`
  position: relative;
  width: 200px;
  height: 100px;
  margin-top: -100px;
  padding-top: 2px;
  background: #26A69A;
  left: -250px;
  transition: 0.3s;
`;

const BtnText = styled.text`
  color: white;
  transition: 0.3s;
`;

const BtnText2 = styled.p`
  margin-top: 63px;
  margin-right: -130px;
  color: #FFF;
`;