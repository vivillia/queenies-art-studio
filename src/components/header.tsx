// Header.tsx
import React from 'react';
import './header.css'

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="header-title">Queenie's Art Studio</h1>
      <nav className="header-nav">
        <ul>
          <li>Home</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
