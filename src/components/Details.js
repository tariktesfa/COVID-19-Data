import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosSettings } from 'react-icons/io';
import { BsFillMicFill } from 'react-icons/bs';
import { CountriesData } from '../redux/Data/CovidData';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const covidData = useSelector((state) => state.dataCovid);
  useEffect(() => {
    dispatch(CountriesData());
  }, [dispatch]);

  const countryData = covidData.filter((data) => data.id === id);
  const CurrFlag = `https://countryflagsapi.com/png/${countryData[0].country}`;

  const date = new Date();
  const today = `${date.getFullYear()}-${
    date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
  }-${date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`}`;

  return (
    <>
      <div className="container">
        {covidData.length === 0 && (
          <h3 className="wait">Loading Covid-19 Data...</h3>
        )}
        {covidData.length > 0 && (
          <>
            <div className="country-name display">
              <div className="main-content">
                <Link to="/" key={id}>
                  <IoIosArrowBack className="back-icon" />
                </Link>
                <h3>Back</h3>
              </div>
              <div>
                <h3>
                  {countryData[0].country}
                  {' '}
                  <span>Covid-19 Statistics</span>
                </h3>
              </div>
              <div className="header-icons">
                <BsFillMicFill className="mic-icon" />
                <IoIosSettings />
              </div>
            </div>
            <div>
              <section className="info-covid display">
                <div className="flag">
                  <img className="img-world" src={CurrFlag} alt="world-covid" />
                </div>
                <div>
                  <p className="info">{countryData[0].country}</p>
                  <p className="info">
                    Total Covid Case:
                    {' '}
                    {countryData[0].TotalConfirmed}
                  </p>
                </div>
              </section>
            </div>
            <div className="country-info">
              <p>STATS BY COUNTRY</p>
            </div>
            <ul>
              <li>
                <span className="left">Date:</span>
                <div className="right">{today}</div>
              </li>
              <li>
                <span className="left">Total Confirmed:</span>
                <div className="right">{countryData[0].TotalConfirmed}</div>
              </li>
              <li>
                <span className="left">New Confirmed:</span>
                <div className="right">{countryData[0].NewConfirmed}</div>
              </li>
              <li>
                <span className="left">New Recovered:</span>
                <div className="right">{countryData[0].NewRecovered}</div>
              </li>
              <li>
                <span className="left">Total Deaths:</span>
                <div className="right">{countryData[0].TotalDeaths}</div>
              </li>
              <li>
                <span className="left">New Deaths:</span>
                <div className="right">{countryData[0].NewDeaths}</div>
              </li>
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Details;
