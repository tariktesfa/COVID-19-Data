import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { IoMdArrowRoundBack, IoIosSettings } from 'react-icons/io';
import { BsFillMicFill } from 'react-icons/bs';
import { loadDataCountries } from '../redux/Data/CovidData';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const covidData = useSelector((state) => state.dataCovid);
  useEffect(() => {
    dispatch(loadDataCountries());
  }, [dispatch]);

  const countryData = covidData.filter((data) => data.id === id);

  return (
    <>
      <div className="container">
        {covidData.length === 0 && (
          <h3 className="wait">Loading Covid Data...</h3>
        )}
        {covidData.length > 0 && (
          <>
            <div className="r-country display">
              <Link to="/" key={id}>
                <IoMdArrowRoundBack className="back-icon" />
              </Link>
              <h2>{countryData[0].country}</h2>
              <div className="header-icons">
                <BsFillMicFill />
                <IoIosSettings />
              </div>
            </div>
            <div>
              <section className="info-covid display">
                <img className="img-world" src="https://i.ibb.co/fkW5pNw/world-covid.jpg" alt="world-covid" />
                <div>
                  <p className="info">{countryData[0].country}</p>
                  <p className="info">{countryData[0].TotalConfirmed}</p>
                </div>
              </section>
            </div>
            <div>
              <p className="country-info">Country information</p>
            </div>
            <ul>
              <li>
                <span className="left">Total Confirmed:</span>
                <div className="right">{countryData[0].TotalConfirmed}</div>
              </li>
              <li>
                <span className="left">New Confirmed:</span>
                <div className="right">{countryData[0].NewConfirmed}</div>
              </li>
              <li>
                <span className="left">Total Recovered:</span>
                <div className="right">{countryData[0].TotalRecovered}</div>
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
              <li>
                <span className="left">Date:</span>
                <div className="right">{countryData[0].Date}</div>
              </li>
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Details;
