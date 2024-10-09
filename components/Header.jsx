import React, { useState } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer" onClick={()=>{
          document.body.classList.toggle("dark")
          setIsDark(!isDark);
        }}>
          <i className={`fa-solid fa-${isDark? 'moon' : 'sun'}`} />
          &nbsp;&nbsp;{!isDark? 'Light' : 'Dark'} Mode
        </p>
      </div>
    </header>
  );
}
