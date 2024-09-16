import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Searchbar from "./components/Searchbar";
import SelectMenu from "./components/SelectMenu";
import CountriesList from "./components/CountriesList";

const App = () => {
  const [query, setQuery] = useState("");

  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <Searchbar setQuery={setQuery} />
          <SelectMenu />
        </div>
        <CountriesList query={query} />
      </main>
    </>
  );
};

export default App;
