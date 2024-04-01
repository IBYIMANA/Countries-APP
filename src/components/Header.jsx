import React, { useState } from 'react';
import SearchInput from './searchinput';
import NavBar from './NavBar';

const Header = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    // Implement your search functionality here
    // For demonstration, let's just set the search results to an array containing the search term
    setSearchResults([searchTerm]);
  };

  return (
    <section className='bg-[url("https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_1280.jpg")] bg-cover h-96'>
      <NavBar />
      <h1 className='text-white text-center mb-4 pt-40 text-5xl '>Country API App</h1>
      <p className='text-white text-center mt-4 text-2xl'>This is a simple app that allows you to search for countries and continents using the API.</p>
      <div className="flex justify-center mt-4">
        <SearchInput onSearch={handleSearch} />
      </div>
    </section>
  );
};

export default Header;