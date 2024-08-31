// PhotoCarousel.tsx
import React, { useState, useEffect } from 'react';
import './photoCarousel.css';

interface PhotoCarouselProps {
  images: { src: string }[];
  interval: number;
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ images, interval }) => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div className="photo-carousel-container">
      <div className="photo-carousel">
        <div className="photo-carousel-inner" style={{ transform: `translateX(-${index * 100}%)` }}>
          {images.map((image, idx) => (
            <div className="photo-carousel-item" key={idx}>
              <img src={image.src} alt={`Slide ${idx}`} />
            </div>
          ))}
        </div>
        <button className="prev" onClick={prev} dangerouslySetInnerHTML={{ __html: '&lt;' }} />
        <button className="next" onClick={next} dangerouslySetInnerHTML={{ __html: '&gt;' }} />
      </div>
    </div>
  );
};

export default PhotoCarousel;
