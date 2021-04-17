import {
  WEATHER_CURRENT_BEGIN,
  WEATHER_CURRENT_ERROR,
  WEATHER_CURRENT_SUCCESS,
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
