import React from "react";
import countriesData from "../countriesData";
import CountryCard from "./CountryCard";

export default function CountriesList({query}) {

  return (
    <>
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
        ;
      </div>
    </>
  );
}
