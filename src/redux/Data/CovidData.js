const FEATCHDATA = 'FEATCHDATA';
const initialState = [];
const apiURL = 'https://api.covid19api.com/summary';
export const getData = (payload) => ({
  type: FEATCHDATA,
  payload,
});

const CovidData = (state = initialState, action) => {
  switch (action.type) {
    case FEATCHDATA:
      return action.payload;
    default:
      return state;
  }
};

export const CountriesData = () => async (dispatch) => {
  const response = await fetch(apiURL);
  const data = await response.json();
  const allCountryData = data.Countries.map((e) => {
    const currentData = {
      id: e.ID,
      country: e.Country,
      NewConfirmed: e.NewConfirmed,
      TotalConfirmed: e.TotalConfirmed,
      NewDeaths: e.NewDeaths,
      TotalDeaths: e.TotalDeaths,
      NewRecovered: e.NewRecovered,
      TotalRecovered: e.TotalRecovered,
      Date: e.Date,
    };
    return currentData;
  });
  dispatch(getData(allCountryData));
};

export default CovidData;
