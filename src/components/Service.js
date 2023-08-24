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
      선배 모험가분들의 막대한 자료를 모아놨어요<br />
      밑에서 클릭만해요.
    </>,
    active: false,
  }
];

function Service() {
  return (
    <Container id="about-us">
      <ServiceTitle>여기는 뭐하는 곳인가요?</ServiceTitle>
      <ServiceCardContainer>
        {cards.map((card) => (
          <ServiceCard
            title={card.title}
            text={card.text}
            image={card.image}
            active={card.active}
            key={card.id}
          />
        ))}
      </ServiceCardContainer>
    </Container>
  );
}

export default Service;

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
    // overflow: hidden;
  }
`;

const ServiceTitle = styled.div`
  width: 100%;
  color: #f0f0f0;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 7vh;
  font-weight: 600;
  font-size: 30px;
  color: rgb(240, 240, 240);
`;

const ServiceCardContainer = styled.div`
  margin-top: 7.5vh;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  @media (max-width: 480px) {
    display: grid;
    padding: 0 32px;
  }
`;
