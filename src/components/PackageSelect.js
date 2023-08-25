import React from 'react'
import { useNavigate } from 'react-router'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { feedGetState, feedPostState } from '../atoms/BoardAtom'

function PackageSelect({ title, active }) {
  const nav = useNavigate()
  const [feedPost, setfeedPost] = useRecoilState(feedGetState)
  const goToFeedWithCountryName = (e) => {
    console.log(e.target.name)
    setfeedPost({ ...feedPost, ['tema']: e.target.name })
    nav("/feed")
  }

  return (
    <ButtonContainer>
      <StyledButton active={active} name="japan" onClick={e => goToFeedWithCountryName(e)} >{title}</StyledButton>
    </ButtonContainer>
  )

}

export default PackageSelect

const ButtonContainer = styled.div`
  display: inline-block;
`;

const StyledButton = styled.button`
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