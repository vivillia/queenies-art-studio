// Home.tsx
import React from 'react';
import './Home.css'; // Optional: You can add your own CSS for styling
import Logo from '../components/Logo';
import Announcement from '../components/Announcement';
import PhotoCarousel from '../components/PhotoCarousel';

const interval = 8888; // Interval in milliseconds 

const items = [
  'Welcome to Queenie\'s Art Studio!', 
  'It\'s back to school season!', 
  'This website is currently a work in progress, stay tuned for more!'
];

const images = [
  { src: "/images/ExpertArtwork1.png" },
  { src: "/images/JuniorArtwork1.png" },
  { src: "/images/JuniorArtwork3.png" }
];

const Home: React.FC = () => {
  return (
    <div className="home">
      <Logo/>
      <Announcement items={items} interval={interval} />
      <PhotoCarousel images={images} interval={interval} />
    </div>
  );
};

export default Home;
