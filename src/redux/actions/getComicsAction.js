import { GET_COMICS, GET_COMICS_ERROR } from '@redux/types';
import { marvelInstance } from '@api/marvelApiIntance';

/**
 * getComicsAction.
 *
 * Puporse:
 * - Fetch characters from api.
 */
export const getComicsAction = () => async (dispatch) => {
  const response = await marvelInstance.get('/comics');

  try {
    dispatch({
      type: GET_COMICS,
      comics: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_COMICS_ERROR,
      comics: response.error,
    });
  }
};
