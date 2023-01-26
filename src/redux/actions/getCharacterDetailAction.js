import { GET_CHARACTER_DETAILS, GET_CHARACTER_DETAILS_ERROR } from '@redux/types';
import { marvelInstance } from '@api/marvelApiIntance';

/**
 * getCharacterDetailAction.
 *
 * Purpose:
 * - Send to reducer all data of a one character.
 *
 * @param id ID of character to show detail.
 * @returns
 */
export const getCharacterDetailAction =
  ({ id }) =>
  async (dispatch) => {
    const response = await marvelInstance.get(`/characters/${id}`);

    try {
      dispatch({
        type: GET_CHARACTER_DETAILS,
        character: response.data.data.results,
      });
    } catch (error) {
      dispatch({
        type: GET_CHARACTER_DETAILS_ERROR,
        character: response.error,
      });
    }
  };
