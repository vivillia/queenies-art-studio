import React from "react";

const Logo: React.FC = () => {
  return (

    <header style={{ textAlign: 'center' }} className="white">
      <div className="flex items-center"> 
        <a href="/">
          <img src="/images/SmallLogo.png" style={{width: '120px', height: '83px'}}  alt="logo" className="w-20 h-auto mr-4"/>
        </a>
      </div>
    </ header>

  );
};

export default Logo;
