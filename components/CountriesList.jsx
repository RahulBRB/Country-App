import React from 'react';
import countriesData from '../countriesData';
import CountryCard from './CountryCard';

export default function CountriesList() {
  const array = countriesData.map((country)=>
  <CountryCard
      key={country.name.common}
      name={country.name.common}
      flag={country.flags.svg}
      population={country.population.toLocaleString('en-IN')}
      region={country.region}
      capital={country.capital?.[0]}
    />
  )

  return (
    <div className="countries-container">
     {array}
    </div>
  )
}
