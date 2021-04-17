import { weather } from 'utils/api';
import {
  convertKelvinToCelcius,
  convertKelvinToFarenheit,
} from 'utils/converter';
import {
  weatherCurrentBegin,
  weatherCurrentSuccess,
  weatherCurrentError,
} from './actions';

export const getCurrentWeather = (query) => (dispatch) => {
  dispatch(weatherCurrentBegin());

  weather
    .get('/weather', {
      params: {
        q: query,
        appid: process.env.REACT_APP_API_KEY,
      },
    })
    .then(({ data }) => {
      const result = {
        info: {
          city: data.name,
          temp: {
            celcius: convertKelvinToCelcius(data.main.temp),
            farenheit: convertKelvinToFarenheit(data.main.temp),
          },
          weather: data.weather[0].main,
          icon: data.weather[0].icon,
        },
        detail: {
          feels: {
            celcius: convertKelvinToCelcius(data.main.feels_like),
            farenheit: convertKelvinToFarenheit(data.main.feels_like),
          },
          min: {
            celcius: convertKelvinToCelcius(data.main.temp_min),
            farenheit: convertKelvinToFarenheit(data.main.temp_min),
          },
          max: {
            celcius: convertKelvinToCelcius(data.main.temp_max),
            farenheit: convertKelvinToFarenheit(data.main.temp_max),
          },
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          wind: data.wind.speed,
        },
      };

      dispatch(weatherCurrentSuccess(result));
    })
    .catch((error) => {
      dispatch(weatherCurrentError(error));
    });
};
