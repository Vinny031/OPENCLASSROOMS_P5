import React, { useState, useEffect } from 'react';

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

  // --- Gestion des touches clavier pour la navigation dans le carroussel. Vérification de la touche pressée par event.key ---
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  // --- Ajout dépendance sur currentIndex pour garder le state à jour ---
  }, [currentIndex]);

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