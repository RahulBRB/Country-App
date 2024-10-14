import React, { useContext, useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useTheme } from "../hooks/useTheme";
// import { ThemeContext } from "../contexts/ThemeContext";
// import { useWindowSize } from "../hooks/useWindowSize";

export default function Home() {
  const [query, setQuery] = useState("");
  // const [isDark] = useContext(ThemeContext);
  const [isDark] = useTheme();
  // const windowSize = useWindowSize();
  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <Searchbar setQuery={setQuery} />
        <SelectMenu />
      </div>
      {/* <h1 style={{ textAlign: "center" }}>
        {windowSize.width} X {windowSize.height}
      </h1> */}
      <CountriesList query={query} />
    </main>
  );
}
