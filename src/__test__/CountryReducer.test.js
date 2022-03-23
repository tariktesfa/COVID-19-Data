import dataCovid from '../redux/Data/CovidData';

const mockStore = {
  countriesReducer: [
    {
      ID: 'd82d5e40-da86-48f5-89c4-2ae919c27773',
      Country: 'Argentina',
      CountryCode: 'AF',
      Slug: 'argentina',
      NewConfirmed: 0,
      TotalConfirmed: 9011367,
      NewDeaths: 0,
      TotalDeaths: 127599,
      NewRecovered: 0,
      TotalRecovered: 0,
      Premium: {},
    },
    {
      ID: '1cbf1306-98b8-4f82-9bb7-89719c59db3c',
      Country: 'Cyprus',
      CountryCode: 'CY',
      Slug: 'cyprus',
      NewConfirmed: 0,
      TotalConfirmed: 367743,
      NewDeaths: 0,
      TotalDeaths: 905,
      NewRecovered: 0,
      TotalRecovered: 0,
      Premium: {},
    },
  ],
};

describe('Test', () => {
  test('Initial State', () => {
    expect(dataCovid([], {})).toEqual([]);
  });
});

describe('Mock covidData Reducer', () => {
  test('Test covidData Reducer With Mock Data', () => {
    const LOAD_DATA = 'LOAD_DATA';
    const store = mockStore;
    const action = {
      type: LOAD_DATA,
      payload: {
        countriesReducer: [
          {
            ID: 'd82d5e40-da86-48f5-89c4-2ae919c27773',
            Country: 'Argentina',
            CountryCode: 'AF',
            Slug: 'argentina',
            NewConfirmed: 0,
            TotalConfirmed: 9011367,
            NewDeaths: 0,
            TotalDeaths: 127599,
            NewRecovered: 0,
            TotalRecovered: 0,
            Premium: {},
          },
          {
            ID: '1cbf1306-98b8-4f82-9bb7-89719c59db3c',
            Country: 'Cyprus',
            CountryCode: 'CY',
            Slug: 'cyprus',
            NewConfirmed: 0,
            TotalConfirmed: 367743,
            NewDeaths: 0,
            TotalDeaths: 905,
            NewRecovered: 0,
            TotalRecovered: 0,
            Premium: {},
          },
        ],
      },
    };
    expect(dataCovid(store, action)).toEqual(action.payload);
  });
});
