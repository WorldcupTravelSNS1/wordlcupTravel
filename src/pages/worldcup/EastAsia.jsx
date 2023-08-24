import { useState, useRef, useEffect } from "react";
import "./Worldcup.css"
import vsImage from "/wordcuptravel/wordlcupTravel/src/assets/VS.png"

import { firework } from "./fireworkfunctions.js";
import styled from "styled-components";
import Cursor from "../../components/cursor/Cursor.jsx";
import ConfettiGenerator from "confetti-js";

const WorldcupContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  z-index: 10000;
  background-color: #4c4747;
  color: white;
`;
const ConfettiCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  text-align: center;
  z-index: 10000;
`;

const VSImage = styled.img`
  width: 100px;
  height: auto;
`;

const Half = styled.div`
  width: 50%;
`;

const ItemImage = styled.img`
  width: 500px;
  height: 500px;
  margin-bottom: 10px;
`;

const WinnerContainer = styled.div`
  max-width: 100%;
  height: 500px;
`;

const CustomButton = styled.button`
  position: relative;
  display: inline-block;
  font-size: 18px;
  padding: 10px 30px;
  color: white;
  margin: 20px 10px 10px;
  border-radius: 6px;
  text-align: center;
  transition: top 0.01s linear;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
  background-color: #50cb68;
  cursor: pointer;

  &:hover {
    background-color: #699dd1;
  }

  &:active {
    top: 9px;
    box-shadow: 0 0 0 1px #6191c2 inset, 0 0 0 2px rgba(18, 119, 48, 0.15) inset,
      0 0 0 1px rgba(8, 49, 33, 0.4);
  }
`;

const Fireworks = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: #ffcc00;
  border-radius: 50%;
  animation: FireworksAnimation 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
  z-index: 9999;
  filter: brightness(150%);
`;


const EastAsia = ({ country }) => {


    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    const [shuffledData, setshuffledData] = useState(() => shuffleArray(country))
    const [showFireworks, setShowFireworks] = useState(false);
    const confettiCanvasRef = useRef(null);
    useEffect(() => {
        if (showFireworks) {
            firework();

            const confettiSettings = { target: confettiCanvasRef.current };
            const confetti = new ConfettiGenerator(confettiSettings);
            confetti.render();
            setTimeout(() => {
                setShowFireworks(false);
                confetti.clear();
            }, 1000);
        }
    }, [showFireworks]);

    const selectWinner = (num) => {
        if (num === 0) {
            setshuffledData((prev) => [...prev.slice(2), prev[0]])
        }
        else {
            setshuffledData((prev) => [...prev.slice(2), prev[1]])
        }
        setShowFireworks(true);
    }

    return (
        <>
            <Cursor />
            <ConfettiCanvas ref={confettiCanvasRef} />
            <WorldcupContainer>
                {shuffledData.length >= 2 && (
                    <>
                        <Half>
                            <Item>
                                <ItemImage
                                    src={shuffledData[0].image}
                                    alt={shuffledData[0].name}
                                />
                                <h2>{shuffledData[0].name}</h2>
                                <CustomButton onClick={() => selectWinner(0)}>
                                    여기 어때?
                                </CustomButton>
                                {showFireworks && <Fireworks />}
                            </Item>
                        </Half>
                        <div className="vs">
                            <VSImage src={vsImage} alt="VS" />
                        </div>
                        <Half>
                            <Item>
                                <ItemImage
                                    src={shuffledData[1].image}
                                    alt={shuffledData[1].name}
                                />
                                <h2>{shuffledData[1].name}</h2>
                                <CustomButton onClick={() => selectWinner(1)}>
                                    여기 어때?
                                </CustomButton>
                                {showFireworks && <Fireworks />}
                            </Item>
                        </Half>
                    </>
                )}

                {shuffledData.length === 1 && (
                    <WinnerContainer>
                        <h2>‼‼‼1등 {shuffledData[0].name}‼‼‼ <CustomButton
                            onClick={() => {
                                const result = window.confirm(
                                    `${shuffledData[0].name}의 정보가 있는 장소로 이동하시겠습니까?`
                                );
                                if (result) {
                                    window.location.href = `/feed/${shuffledData[0].name}`;
                                }
                            }}
                        >
                            눌러봐
                        </CustomButton></h2>
                        <ItemImage src={shuffledData[0].image} alt={shuffledData[0].name} />


                    </WinnerContainer>



                )}
            </WorldcupContainer>

        </>

    );

};

export default EastAsia