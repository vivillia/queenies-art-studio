// App.tsx
import React from 'react';
import './App.css'; // Main CSS file
import Announcement from './components/Announcement';
import Logo from './components/Logo';
import PhotoCarousel from './components/PhotoCarousel';

const App: React.FC = () => {
  const items = [
    'Welcome to Queenie\'s Art Studio!', 
    'It\'s back to school season!', 
    'This website is currently a work in progress, stay tuned for more!'
  ];

  const interval = 8888; // Interval in milliseconds 

  const images = [
    { src: "/images/ExpertArtwork1.png" },
    { src: "/images/JuniorArtwork1.png" },
    { src: "/images/JuniorArtwork3.png" }
  ];


  return (
    <div className="App">
      
      <main>
        <Logo />
        <Announcement items={items} interval={interval} />
        <PhotoCarousel images={images} interval={interval} />

      </main>
    </div>
  );
};

export default App;
