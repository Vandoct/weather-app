import { PLACES_BEGIN, PLACES_ERROR, PLACES_SUCCESS } from './types';

export const placesBegin = () => {
  return {
    type: PLACES_BEGIN,
  };
};

export const placesSuccess = (data) => {
  return {
    type: PLACES_SUCCESS,
    payload: data,
  };
};

export const placesError = (error) => {
  return {
    type: PLACES_ERROR,
    payload: error,
  };
};
