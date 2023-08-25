import React from "react";
import styled from "styled-components";
import ServiceCard from "./ServiceCard";

const cards = [
  {
    title: "WorldCup",
    text: <>
      여행이 가고싶은데 어디를 가야할지 모르겠어요?<br />
      결정을 못하겠어요??????????????<br />
      대륙별로 모아놨어요.<br />
      밑에서 클릭만해요.
    </>
    ,
    active: false,
  },
  {
    title: "Feed",
    text: <>
      선배 여행자분들의 방대한 자료를 모아놨어요<br />
      밑에서 클릭만해요.
    </>,
    active: false,
  }
];

function Service() {
  return (
    <Container id="about-us">
      <ServiceTitle>가고싶은 여행지 결정에 도움을 드립니다.</ServiceTitle>

      <StyledButton>
        <CardWrapper>
          {cards.map((card) => (
            <ServiceCard
              title={card.title}
              text={card.text}
              image={card.image}
              active={card.active}
              key={card.id}
            />

          ))}
        </CardWrapper>
        <AnimatedSpan1 />
        <AnimatedSpan2 />
        <AnimatedSpan3 />
        <AnimatedSpan4 />
      </StyledButton>

    </Container>
  );
}

export default Service;
const CardWrapper = styled.div`
  display: flex; /* 가로로 배치되도록 설정 */
`;

const Container = styled.div`
  width: 100vw;
  display: flex;
  background: #333;
  flex-direction: column;
  height: 60vh;
  padding-top: 1vh;
  cursor: pointer;
  align-items: center;
  @media (max-width: 480px) {
    height: 100%;
    align-content: center;
    justify-content: center;
  }
`;

const ServiceTitle = styled.div`
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 7vh;
  font-weight: 600;
  font-size: 30px;
`;

const ServiceCardContainer = styled.div`
  margin-top: 7.5vh;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  @media (max-width: 480px) {
    display: grid;
    padding: 0 32px;
  }
`;

const StyledButton = styled.a`
  display: inline-block;
  padding: 25px 30px;
  margin: 40px 0;
  color: #03e9f4;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 4px;
  overflow: hidden;
  margin-right: 50px;
  position: relative;
  cursor: pointer;
  &:hover {
    background: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 200px #03e9f4;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }
`;

const AnimatedSpan = styled.span`
  position: absolute;
  display: block;
`;

const animateStyle = (deg, startDelay) => `
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(${deg}deg, transparent, #03e9f4);
  animation: animate linear 1s infinite;
  animation-delay: ${startDelay}s;
  @keyframes animate {
    0% {
      left: -100%;
    }
    50%, 100% {
      left: 100%;
    }
  }
`;

const AnimatedSpan1 = styled(AnimatedSpan)`
  ${props => animateStyle(90, 0)}
`;

const AnimatedSpan2 = styled(AnimatedSpan)`
  ${props => animateStyle(180, 0.25)}
`;

const AnimatedSpan3 = styled(AnimatedSpan)`
  ${props => animateStyle(270, 0.5)}
`;

const AnimatedSpan4 = styled(AnimatedSpan)`
  ${props => animateStyle(360, 0.75)}
`;