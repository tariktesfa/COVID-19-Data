const FETCHDATA = 'COVID-19-DATA/ITEMS/FETCH';
export const date = new Date().toISOString().split('T')[0];
export const newDate = date.toString();
const url = `https://api.covid19tracking.narrativa.com/api/${date}`;

const fetchData = (payload) => ({
  type: FETCHDATA,
  payload,
});

export const fetchItemData = () => async (dispatch) => {
  const response = await fetch(url);
  const data = await response.json();
  const dateItems = data.dates[newDate].countries;
  const obj = Object.values(dateItems);
  dispatch(fetchData(obj));
};

const DataReducer = (state = [], action) => {
  switch (action.type) {
    case FETCHDATA:
      return action.payload;
    default:
      return state;
  }
};
export default DataReducer;
