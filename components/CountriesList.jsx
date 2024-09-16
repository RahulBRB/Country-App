import React, { useEffect } from "react";
import countriesData from "../countriesData";
import CountryCard from "./CountryCard";

export default function CountriesList({ query }) {
  const [countriesData, setCountriesData] = React.useState([]);

  useEffect(()=>{
    
  if (countriesData.length === 0) {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }
  }, [])
  return (
    <>
    <button onClick={()=>setCountriesData([])}>Remove all</button>
      <div className="countries-container">
        {countriesData
          .filter((country) =>
            country.name.common.toLowerCase().includes(query)
          )
          .map((country) => (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population.toLocaleString("en-IN")}
              region={country.region}
              capital={country.capital?.[0]}
            />
          ))}
      </div>
    </>
  );
}
