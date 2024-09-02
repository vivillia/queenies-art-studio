// src/Gallery.tsx
import React from 'react';
import GalleryGrid from '../components/GalleryGrid';
import Logo from '../components/Logo';

<Logo/>

interface GalleryItem {
  src: string; // URL or path to the image
  alt: string; // Alt text for the image
}

interface GalleryProps {
}

const artwork: GalleryItem[] = [
  { src: '/images/ExpertArtwork2.png', alt: 'Artwork 1' },
  { src: '/images/JuniorArtwork4.png', alt: 'Artwork 2' },
  { src: '/images/ExpertArtwork3.png', alt: 'Artwork 3' },
];

const Gallery: React.FC<GalleryProps> = () => {
  return (
    <div className="gallery">
        <Logo/>
      <GalleryGrid items={artwork} />
    </div>
  );
};



export default Gallery;
