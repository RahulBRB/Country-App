import React, { useContext} from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Header() {
  // const [isDark, setIsDark] = theme;
  const [isDark,setIsDark] = useContext(ThemeContext);

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
