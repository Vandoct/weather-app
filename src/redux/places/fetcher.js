import { places } from 'utils/api';
import { placesBegin, placesError, placesSuccess } from './actions';

export const search = (query) => (dispatch) => {
  dispatch(placesBegin());

  if (!query.length) {
    dispatch(placesSuccess([]));
    return;
  }

  places
    .post('/places/query', {
      query,
      type: 'city',
      hitsPerPage: 10,
      language: 'en',
    })
    .then(({ data }) => {
      const result = data.hits.map((item) => {
        return {
          id: item.objectID,
          label: `${item.locale_names[0]}, ${item.administrative[0]}, ${item.country}`,
        };
      });

      dispatch(placesSuccess(result));
    })
    .catch((error) => {
      dispatch(placesError(error));
    });
};
