// Header.tsx
import React from "react";
import "./header.css";

const Header: React.FC = () => {
  return (


    <header style={{ textAlign: 'center' }} className="white">
      <div className="flex items-center"> 
       <img src="/images/SmallLogo.png" style={{width: '120px', height: '83px'}}  alt="logo" className="w-20 h-auto mr-4"/>
      </div>
      <div>
        
      </div>
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
