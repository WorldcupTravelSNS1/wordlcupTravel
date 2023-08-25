import React from "react";
import styled from "styled-components";
import PackageCard from "./PackageCard";
import PackageSelect from "./PackageSelect";
import { useNavigate } from "react-router";



function Packages() {
    const nav = useNavigate();

    const goToEurope = () => {
        nav("/worldcup/europe");
    };

    const goToNcsAmerica = () => {
        nav("/worldcup/ncsamerica");
    };

    const goToEastAsia = () => {
        nav("/worldcup/eastasia");
    };

    const goToSouthEastAsia = () => {
        nav("/worldcup/seasia");
    };


    return (
        <Container id='packages'>
            <Title>대륙별 여행지 월드컵</Title>
            <PackageCards>
                <PackageCard

                    image='america.jpg' onClick={goToNcsAmerica}
                />
                <PackageCard

                    image='europe.jpg' onClick={goToEurope}
                />
                <PackageCard
                    image='eastasia.jpg' onClick={goToEastAsia}
                />
                <PackageCard

                    image='seasia.jpg' onClick={goToSouthEastAsia}
                />
            </PackageCards><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            <Title id='feed'>피드</Title>
            <Package>
                <PackageSelect title='일본' active={true} />
                <PackageSelect title='중국' active={false} />
                <PackageSelect title='대한민국' active={false} />
                <PackageSelect title='대만' active={false} />
                <PackageSelect title='홍콩' active={false} />
                <PackageSelect title='뉴질랜드' active={false} />
                <PackageSelect title='몽골' active={false} />
                <PackageSelect title='호주' active={false} />
            </Package>
            <Package>
                <PackageSelect title='동티모르' active={true} />
                <PackageSelect title='라오스' active={false} />
                <PackageSelect title='말레이시아' active={false} />
                <PackageSelect title='미얀마' active={false} />
                <PackageSelect title='베트남' active={false} />
                <PackageSelect title='태국' active={false} />
                <PackageSelect title='인도네시아' active={false} />
                <PackageSelect title='필리핀' active={false} />
            </Package>
            <Package>
                <PackageSelect title='미국' active={true} />
                <PackageSelect title='캐나다' active={false} />
                <PackageSelect title='멕시코' active={false} />
                <PackageSelect title='브라질' active={false} />
                <PackageSelect title='아르헨티나' active={false} />
                <PackageSelect title='우루과이' active={false} />
                <PackageSelect title='칠레' active={false} />
                <PackageSelect title='콜롬비아' active={false} />
            </Package>
            <Package>
                <PackageSelect title='네덜란드' active={true} />
                <PackageSelect title='독일' active={false} />
                <PackageSelect title='스위스' active={false} />
                <PackageSelect title='스페인' active={false} />
                <PackageSelect title='영국' active={false} />
                <PackageSelect title='프랑스' active={false} />
                <PackageSelect title='튀르키예' active={false} />
                <PackageSelect title='이탈리아' active={false} />
            </Package>



        </Container>
    );
}

export default Packages;

const Container = styled.div`
    height: fit-content;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: #ECF1F0;
    margin-top: 5vh;
    @media (min-width: 768px) {
        height: 100vh;
    }
`

const Title = styled.div`
    font-weight: 700;
    font-size: 4vh;
    width: 100%;
    text-align: center;
    margin-top: 1vh;
`

const Package = styled.div`
    width: 80vw;
    max-width: 1024px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1vw 7vw;
    @media (max-width: 480px) {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 15px;
    }
`

const PackageCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row
    }
    @media (max-width: 300px) {
        height: 70%;
        width: 70%;
        padding: 10px 10px;
        justify-content: center;
        align-items: center;
        margin: 0;
    }
    
`

const Discover = styled.a`
  margin-top: 4vh;
  background-color: #00a651;
  padding: 15px 20px;
  border-radius: 7px;
  font-size: 2.5vh;
  font-weight: 500;
  color: white;
  cursor: pointer;
  margin-bottom: 5vh;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;
