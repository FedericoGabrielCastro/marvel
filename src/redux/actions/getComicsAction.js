import { GET_COMICS, GET_COMICS_ERROR } from '@redux/types';
import { marvelInstance } from '@api/marvelApiIntance';

/**
 * getComicsAction.
 *
 * Puporse:
 * - Fetch characters from api.
 */
export const getComicsAction = () => async (dispatch) => {
  try {
    const response = await marvelInstance.get('/comics');

    dispatch({
      type: GET_COMICS,
      comics: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_COMICS_ERROR,
      error: error.message,
    });
  }
};
