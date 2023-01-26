import { GET_CHARACTERS, GET_CHARACTERS_ERROR } from '@redux/types';
import { marvelInstance } from '@api/marvelApiIntance';

/**
 * getCharactersAction.
 *
 * Puporse:
 * - Fetch characters from api.
 *
 * @param offset Numer to know pagination.
 */
export const getCharactersAction =
  ({ offset }) =>
  async (dispatch) => {
    try {
      const response = await marvelInstance.get(`characters?limit=20&offset=${offset}`);

      dispatch({
        type: GET_CHARACTERS,
        characters: response.data,
      });
    } catch (error) {
      dispatch({
        type: GET_CHARACTERS_ERROR,
        error: error.message,
      });
    }
  };
