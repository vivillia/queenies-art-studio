// App.tsx
import React from 'react';
import './App.css'; // Main CSS file
import Header from './components/header'; // Import the Header component
import Announcement from './components/announcement';
import Logo from './components/logo';

const App: React.FC = () => {
  const items = ['Text 1', 'Text 2', 'Text 3'];
  return (
    <div className="App">
      
      <main>
        <Logo />
         <Announcement items={items} />
         <Header />
      </main>
    </div>
  );
};

export default App;
