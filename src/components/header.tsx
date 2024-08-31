// Header.tsx
import React from "react";
import "./header.css";

const Header: React.FC = () => {
  return (


    <header style={{ textAlign: 'center' }} className="white">
        <nav className="flex header-nav flex-row">
          <ul>
            <li>
              <a href="/Gallery">Gallery</a> 
            </li>
            <li>
              <a href="/Shop">Shop</a>
            </li>
            <li>
            <a href="/Contact">Contact</a>
            </li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;
