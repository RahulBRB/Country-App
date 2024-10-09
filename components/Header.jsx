import React, { useState } from "react";

export default function Header({theme}) {
  const [isDark, setIsDark] = theme;

  // if(isDark){
  //   document.body.classList.add("dark");
  // }else {
  //   document.body.classList.remove("dark");
  // }

  return (
    <header className={`header-container ${isDark?'dark': ''}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p
          className="theme-changer"
          onClick={() => {
            document.body.classList.toggle("dark");
            setIsDark(!isDark);

            // Save the theme preference in local storage
            localStorage.setItem("isDark", !isDark);
          }}
        >
          <i className={`fa-solid fa-${!isDark ? "moon" : "sun"}`} />
          &nbsp;&nbsp;{isDark ? "Light" : "Dark"} Mode
        </p>
      </div>
    </header>
  );
}
