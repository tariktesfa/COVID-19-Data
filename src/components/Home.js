import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import ItemsCard from './ItemsCard';
import { CountriesData } from '../redux/Data/CovidData';

const Home = () => {
  const myData = useSelector((state) => state.dataCovid);
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CountriesData());
  }, [dispatch]);

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <div className="search">
        <p className="country-search">Seach By Country: </p>
        <input
          value={searchText}
          type="text"
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Search Country"
          className="search-input"
        />
      </div>
      <div className="countries display">
        {myData
          .filter((data) => data.country.toLowerCase().includes(searchText.toLowerCase()))
          .map((data) => (
            <ItemsCard
              key={data.id}
              id={data.id}
              country={data.country}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
