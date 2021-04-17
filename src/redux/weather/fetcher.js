import { weather } from 'utils/api';
import {
  convertKelvinToCelcius,
  convertKelvinToFarenheit,
} from 'utils/converter';
import {
  weatherCurrentBegin,
  weatherCurrentSuccess,
  weatherCurrentError,
  weatherForecastBegin,
  weatherForecastSuccess,
  weatherForecastError,
} from './actions';

export const getCurrentWeather = (query, latitude, longitude) => (dispatch) => {
  dispatch(weatherCurrentBegin());

  const params = query.length
    ? {
        q: query,
      }
    : {
        lat: latitude,
        lon: longitude,
      };

  weather
    .get('/weather', {
      params: {
        ...params,
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

export const getWeatherForecast = (query, latitude, longitude) => (
  dispatch
) => {
  dispatch(weatherForecastBegin());

  const params = query.length
    ? {
        q: query,
      }
    : {
        lat: latitude,
        lon: longitude,
      };

  weather
    .get('/forecast/daily', {
      params: {
        ...params,
        appid: process.env.REACT_APP_API_KEY,
      },
    })
    .then(({ data }) => {
      const days = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
      const result = data.list.map((forecast, index) => {
        return {
          id: forecast.dt,
          day: days[index],
          icon: forecast.weather[0].icon,
          weather: forecast.weather[0].main,
          min: {
            celcius: convertKelvinToCelcius(forecast.temp.min),
            farenheit: convertKelvinToFarenheit(forecast.temp.min),
          },
          max: {
            celcius: convertKelvinToCelcius(forecast.temp.max),
            farenheit: convertKelvinToFarenheit(forecast.temp.max),
          },
        };
      });

      dispatch(weatherForecastSuccess(result));
    })
    .catch((error) => {
      dispatch(weatherForecastError(error));
    });
};
