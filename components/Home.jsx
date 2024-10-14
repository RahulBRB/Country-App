import React, { useContext, useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import {ThemeContext} from "../contexts/ThemeContext";
export default function Home() {
    const [query, setQuery] = useState("");
    const [isDark] = useContext(ThemeContext);
    const [width, setWidth] = useState(
      window.innerWidth
    )
    useEffect(()=>{
      window.addEventListener('resize', ()=>{
       setWidth(window.innerWidth)
      })
    }, [])

    return (
    <main className={`${isDark? 'dark' : ''}`}>
    <div className="search-filter-container">
      <Searchbar setQuery={setQuery} />
      <SelectMenu />
    </div>
    <h1 style={{textAlign: 'center'}}>{width}</h1>
    <CountriesList query={query} />
  </main>
  )
}
