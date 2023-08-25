import React, { useState } from 'react';
import "./ImageList.css"

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
    <div className="image-list-container">
      <div className="image-slider">
        <div className="image-slider-frame">
          <img
            src={imageUrlArray[currentImageIndex]}
            alt={`Image ${currentImageIndex}`}
            className="image-list-img"
          />
        </div>
      </div>
      <button className='button-sub' onClick={prevImage}>&lt;</button>
      <button className='button-sub' onClick={nextImage}>&gt;</button>
    </div>
  );
};

export default ImageList;
