import React from "react";
import styled from "styled-components";
import ServiceCard from "./ServiceCard";

const cards = [
  {
    title: "WorldCup",
    text: "여러분이 가장 좋아하는 여행지는 어디신가요? 가보고싶은 여행지는 어디신가요? 여러분이 선택할 수 있습니다.",
    image: "ticket.png",
    active: false,
  },
  {
    title: "Feed",
    text: "여러분이 갔던 여행지를 자랑하세요! 당신의 경험이 누군가에겐 좋은 교보재가 됩니다.",
    image: "hotel.png",
    active: false,
  },
  {
    title: "Follow",
    text: "세계를 탐험하는 사람들이 있습니다. 여러분에게 도움이 될것입니다. 팔로우하고 게시물을 확인하세요.",
    image: "tour.png",
    active: false,
  },
];

function Service() {
  return (
    <Container id="about-us">
      <ServiceTitle>Our Services</ServiceTitle>
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
