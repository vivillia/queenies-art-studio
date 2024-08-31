// App.tsx
import React from 'react';
import './App.css'; // Main CSS file
import Announcement from './components/announcement';
import Logo from './components/logo';

const App: React.FC = () => {
  const items = ['Welcome to Queenie\'s Art Studio!', 'Click the paint palette for more options', 'This website is currently a work in progress, stay tuned for more!'];
  const interval = 8880; // Interval in milliseconds 


  return (
    <div className="App">
      
      <main>
        <Logo />
        <Announcement items={items} interval={interval} />

      </main>
    </div>
  );
};

export default App;
