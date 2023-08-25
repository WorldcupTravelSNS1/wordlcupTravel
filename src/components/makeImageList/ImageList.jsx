import React, { useState } from 'react';

import styled from "styled-components";
const ImageListContainer = styled.div`
  margin: 20px;
  background-color: #E0E5EC;
  z-index: -1;
  overflow: hidden;
  width: 600px;
  height: 100%;
`;
const ImageSlider = styled.div`
  display: flex;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-${(props) => props.currentIndex * 100}%);
`;
const Card = styled.div`
  background-color: #E0E5EC;
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
  transition: all 250ms ease-in-out;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
const PrevNextButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  color: #444;
  &:hover {
    color: #C81AD1;
  }
`;
const ImageFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 300px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
`;

const ImageList = ({ jsonString }) => {
  const imageUrlArray = JSON.parse(jsonString);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrlArray.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageUrlArray.length) % imageUrlArray.length);
  };

  return (
    <ImageListContainer>
      <div className="image-slider">
        <button onClick={prevImage}>&lt;</button>
        <div className="image-slider-frame">
          <img
            src={imageUrlArray[currentImageIndex]}
            alt={`Image ${currentImageIndex}`}
            className="image-list-img"
          />
        </div>
        <button onClick={nextImage}>&gt;</button>
      </div>

    </ImageListContainer>
  );
};

export default ImageList;
