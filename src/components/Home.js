import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillMicFill } from 'react-icons/bs';
import { IoIosSettings } from 'react-icons/io';
import ItemsCard from './ItemsCard';
import { loadDataCountries } from '../redux/Data/CovidData';

const Home = () => {
  const myData = useSelector((state) => state.CovidData);
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDataCountries());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="r-country display">
        <h2>World Covid 19 Statistics</h2>
        <div className="header-icons">
          <BsFillMicFill />
          <IoIosSettings />
        </div>
      </div>
      <div>
        <section className="info-covid display">
          <img className="img-world display" src="https://i.ibb.co/fkW5pNw/world-covid.jpg" alt="world-covid" />
          <div>
            <p className="info">Data World Covid19</p>
            <p className="info">Complete, detailed information</p>
            <p className="info">and updated from each country</p>
          </div>
        </section>
      </div>
      <div className="search display">
        <p className="country-info">Search by country name</p>
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
