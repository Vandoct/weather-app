import { TOKEN } from 'constants/key';
import { TTL_IN_MILLIS } from 'constants/time';
import { generateToken } from 'utils/helper';
import { commonBegin, commonError, commonSuccess } from './actions';

export const login = (username, password) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(commonBegin());

    if (username === 'a' && password === 'a') {
      setTimeout(() => {
        const token = generateToken();
        const time = new Date().getTime();

        localStorage.setItem(
          TOKEN,
          JSON.stringify({
            token,
            expire: time + TTL_IN_MILLIS,
          })
        );

        dispatch(
          commonSuccess({
            isLoggedIn: true,
            token,
          })
        );
        resolve('Success');
      }, 1000);
    } else {
      setTimeout(() => {
        dispatch(commonError('Failure'));
        reject('Failure');
      }, 1000);
    }
  });
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem(TOKEN);
    dispatch(
      commonSuccess({
        isLoggedIn: false,
        token: null,
      })
    );
  };
};
