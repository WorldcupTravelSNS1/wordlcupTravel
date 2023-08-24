import React from 'react'
import styled from 'styled-components'

function PackageSelect({ title, active }) {
  if (active)
    return (
      <ContainerActive>{title}</ContainerActive>
    )
  else return (
    <ContainerInactive>{title}</ContainerInactive>
  )
}

export default PackageSelect

const containerStyles = `
  padding: 1.5vh 2vw;
  border-radius: 7px;
  font-size: 2vh;
  font-weight: 500;
  color: white;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  line-height: 2.5vh;
  &:hover {
    color: white;
  }
`

const ContainerActive = styled.a`
  background-color: #00A651;
${containerStyles}


  padding: 1.5vh 2vw;
  border-radius: 7px;
  font-size: 2vh;
  font-weight: 500;
  color: white;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  display: inline-block; /* Add this line */
  &:hover {
    color: white;
  }
`;

const ContainerInactive = styled.a`
  background-color: #666666;
  ${containerStyles}
  padding: 1.5vh 2vw;
  border-radius: 7px;
  font-size: 2vh;
  font-weight: 500;
  color: white;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  display: inline-block; /* Add this line */
  &:hover {
    color: white;
  }
`;