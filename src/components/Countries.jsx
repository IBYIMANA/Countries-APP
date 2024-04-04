import React, { useEffect, useState } from 'react';
import { CountriesSection } from '../styled-components/GeneralComponents'

const countries = [
  {
    name: 'Afghanistan',
    code: 'AF',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg'
  },
  {
    name: 'Albania',
    code: 'AL',
    flag: 'https://flagcdn.com/al.svg'
  }
];

const Countries = () => {
  const [listOfCountries, setListOfCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (response.status === 200) {
      const data = await response.json();
      console.log(data[0]);
      setListOfCountries(data);
    }

    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    getCountries();
  },[]);

  return (
    <CountriesSection>
      {/* Top part  */}
      <div id='top-section'>
        <div>
          <h3>View Countries</h3>
          <p>Page 1 of 5</p>
        </div>
        <select>
          <option value="">Select region</option>
        </select>
      </div>

      {/* List of countries */}
      <div id='countries' className='flex flex-wrap justify-between w-full md:gap-1'>
        {listOfCountries.length > 0 && listOfCountries.map((country, index) => {
          return (
            <div key={index} className='w-5/12 mb-5 md:w-1/5'>
              <img src={country.flags.svg} alt={country.flags.alt} />
              <p>{country.name.common}</p>
              <p>{country.capital}</p>
              <p>{country.population}</p>
              <p>{country.continents}</p>
            </div>
          )
        })}

        {loading && <p>Loading...</p>}

        {(!loading && listOfCountries.length === 0) && <p>No countries available</p>}

        {/* Using Ternary operators */}
        {/* {listOfCountries.length > 0
          ? 
            listOfCountries.length > 0 && listOfCountries.map((country, index) => {
              return (
                <div key={index}>
                  <img src={country.flag} alt={country.name} />
                  <p>{country.name}</p>
                </div>
              )
            })
          : <p>No countries available</p>
        } */}

      </div>

      {/* Pagination  */}
      <div id='pagination'>
        <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">1</button>
        <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">2</button>
        <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">3</button>
        <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">4</button>
        <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">5</button>
      </div>
    </CountriesSection>
  )
}

export default Countries