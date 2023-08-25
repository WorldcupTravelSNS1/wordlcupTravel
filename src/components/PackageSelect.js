import React from 'react'
import styled from 'styled-components'

function PackageSelect({ title, active }) {
  if (active)
    return (
      <ButtonContainer>
        <StyledButton active={active}>{title}</StyledButton>
      </ButtonContainer>
    )
  else return (
    <ButtonContainer>
      <StyledButton active={active}>{title}</StyledButton>
    </ButtonContainer>
  )
}

export default PackageSelect

const ButtonContainer = styled.div`
  display: inline-block;
`;

const StyledButton = styled.a`
  display: inline-block;
  padding: 1.5vh 2vw;
  border-radius: 7px;
  font-size: 2vh;
  font-weight: 500;
  color: white;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  line-height: 2.5vh;
  background-color: ${props => (props.active ? '#2d9c36' : '#2d9c36')};
  &:hover {
    box-shadow: ${props =>
    props.active ? '0px 0px 0px 5px #21825B' : '0px 0px 0px 5px #666666'};
  }
`;