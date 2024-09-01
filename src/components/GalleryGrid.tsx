// src/GalleryGrid.tsx
import React from 'react';
import './GalleryGrid.css'; // Import the CSS file for styling

interface GalleryGridProps {
  items: { src: string; alt: string }[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ items }) => {
  return (
    <div className="gallery-grid">
      {items.map((item, index) => (
        <div className="gallery-item" key={index}>
          <img src={item.src} alt={item.alt} />
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
