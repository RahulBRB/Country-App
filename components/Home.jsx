import React, { useContext, useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { ThemeContext } from "../contexts/ThemeContext";
export default function Home() {
  const [query, setQuery] = useState("");
  const [isDark] = useContext(ThemeContext);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });
  }, []);

  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <Searchbar setQuery={setQuery} />
        <SelectMenu />
      </div>
      <h1 style={{ textAlign: "center" }}>
        {windowSize.width} X {windowSize.height}
      </h1>
      <CountriesList query={query} />
    </main>
  );
}
