import React from "react";
import styled, { keyframes } from "styled-components";

const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin: 0 2rem;

  @media (max-width: 600px) {
    display: none;
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(10px);
  }
`;

const StyledList = styled.li`
  cursor: pointer;
  border-radius: 24px;
  padding: 16px 32px;
  font-family: "Roboto";
  font-weight: 500;
  display: block;
  outline: none;
  text-decoration: none;
  font-size: 18px;
  background: var(--background);
  color: var(--text);
  box-shadow: var(--shadow);
  transition: transform var(--duration) ease, box-shadow var(--duration) ease;

  &:hover {
    --y: var(--move-hover);
    --shadow: var(--shadow-hover);
    transform: translateY(-5px);
    div span {
      animation: ${bounce} 1s infinite;
    }
  }

  div {
    display: flex;
    overflow: hidden;
    text-shadow: 0 var(--font-shadow) 0 var(--text);
    span {
      display: inline-block;
      backface-visibility: hidden;
      font-style: normal;
    }
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <StyledList className="dark">
        <a href="#home" style={{ color: "white", textDecoration: "none" }}>
          <div>
            <span>H</span>
            <span>o</span>
            <span>m</span>
            <span>e</span>
          </div>
        </a>
      </StyledList>
      <StyledList className="white">
        <a href="#about-us" style={{ color: "white", textDecoration: "none" }}>
          <div>
            <span>A</span>
            <span>b</span>
            <span>o</span>
            <span>u</span>
            <span>t</span>
            <span>U</span>
            <span>s</span>
          </div>
        </a>
      </StyledList>
      <StyledList className="dark">
        <a href="#about-us" style={{ color: "white", textDecoration: "none" }}>
          <div>
            <span>W</span>
            <span>o</span>
            <span>r</span>
            <span>l</span>
            <span>d</span>
            <span>C</span>
            <span>u</span>
            <span>p</span>
          </div>
        </a>
      </StyledList>
    </Nav>
  );
};

export default Navigation;
