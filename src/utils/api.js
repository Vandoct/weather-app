import axios from 'axios';

const places = axios.create({
  baseURL: process.env.REACT_APP_API_PLACES,
  headers: {
    'Content-Type': 'application/json',
  },
});

const weather = axios.create({
  baseURL: process.env.REACT_APP_API_WEATHER,
});

export { places, weather };
