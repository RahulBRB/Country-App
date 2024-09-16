import React from "react";
import Header from "./components/Header";
import "./App.css";
import Searchbar from "./components/Searchbar";
import SelectMenu from "./components/SelectMenu";
import CountriesList from "./components/CountriesList";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <Searchbar />
          <SelectMenu />
        </div>
        <CountriesList />
      </main>
    </>
  );
};

export default App;
