import { COMMON_BEGIN, COMMON_ERROR, COMMON_SUCCESS } from './types';

export const commonBegin = () => {
  return {
    type: COMMON_BEGIN,
  };
};

export const commonSuccess = (data) => {
  return {
    type: COMMON_SUCCESS,
    payload: data,
  };
};

export const commonError = (error) => {
  return {
    type: COMMON_ERROR,
    payload: error,
  };
};
