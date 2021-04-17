import {
  WEATHER_CURRENT_BEGIN,
  WEATHER_CURRENT_ERROR,
  WEATHER_CURRENT_SUCCESS,
  WEATHER_FORECAST_BEGIN,
  WEATHER_FORECAST_ERROR,
  WEATHER_FORECAST_SUCCESS,
} from './types';

export const weatherCurrentBegin = () => {
  return {
    type: WEATHER_CURRENT_BEGIN,
  };
};

export const weatherCurrentSuccess = (data) => {
  return {
    type: WEATHER_CURRENT_SUCCESS,
    payload: data,
  };
};

export const weatherCurrentError = (error) => {
  return {
    type: WEATHER_CURRENT_ERROR,
    payload: error,
  };
};

export const weatherForecastBegin = () => {
  return {
    type: WEATHER_FORECAST_BEGIN,
  };
};

export const weatherForecastSuccess = (data) => {
  return {
    type: WEATHER_FORECAST_SUCCESS,
    payload: data,
  };
};

export const weatherForecastError = (error) => {
  return {
    type: WEATHER_FORECAST_ERROR,
    payload: error,
  };
};
