import { GET_COMICS_DETAILS, GET_COMICS_DETAILS_ERROR } from '@redux/types';
import { marvelInstance } from '@api/marvelApiIntance';

/**
 * getComicDetailAction.
 *
 * Purpose:
 * - Send to reducer all data of a one comic.
 *
 * @param id ID of comic to show detail.
 * @returns action dispatch with all data about one comic.
 */
export const getComicDetailAction =
  ({ id }) =>
  async (dispatch) => {
    try {
      const response = await marvelInstance.get(`/comics/${id}`);

      dispatch({
        type: GET_COMICS_DETAILS,
        comic: response.data.data.results,
      });
    } catch (error) {
      dispatch({
        type: GET_COMICS_DETAILS_ERROR,
        error: error.message,
      });
    }
  };
