import React, { useState } from 'react';

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  

  return (
    <div className="slider">
    <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slider-image" />
    {images.length > 1 && (
      <div className="slider-button">
        <button onClick={prevSlide} className="prev-button">❮</button>
        <button onClick={nextSlide} className="next-button">❯</button>
      </div>
    )}
    {images.length > 1 && (
      <div className="slider-number">
        {currentIndex + 1}/{images.length}
      </div>
    )}
  </div>
);

}

export default Slideshow;