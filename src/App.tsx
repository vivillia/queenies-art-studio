// App.tsx
import React from 'react';
import './App.css'; // Main CSS file
import Header from './components/header'; // Import the Header component
import Announcement from './components/announcement';

const App: React.FC = () => {
  const items = ['Text 1', 'Text 2', 'Text 3'];
  return (
    <div className="App">
      <Header />

      <main>
         <Announcement items={items} />
      </main>
    </div>
  );
};

export default App;
