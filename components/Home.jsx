import React, { useState } from "react";
import Searchbar from "./Searchbar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useOutletContext } from "react-router-dom";

export default function Home() {
    const [query, setQuery] = useState("");
    const [isDark] = useOutletContext();
  return (
    <main className={`${isDark? 'dark' : ''}`}>
    <div className="search-filter-container">
      <Searchbar setQuery={setQuery} />
      <SelectMenu />
    </div>
    <CountriesList query={query} />
  </main>
  )
}
