import { GET_COMICS_DETAILS, GET_COMICS_DETAILS_ERROR, LOADING } from '@redux/types';

/**
 * InitialState.
 *
 * Purpose:
 * - Set initial state comic reducer.
 */
export const initialState = {
  comic: [],
  loading: true,
  error: null,
};

/**
 * comicDetailReducer.
 *
 * Purpose:
 * - Set info abaout one comic.
 *
 * @param error error.
 * @param type type.
 * @param comic comic data.
 * @returns Comic detail.
 */
export const comicDetailReducer = (state = initialState, { type, comic, error }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_COMICS_DETAILS:
      return {
        ...state,
        loading: false,
        comic: comic[0],
        error: null,
      };
    case GET_COMICS_DETAILS_ERROR:
      return {
        ...state,
        loading: true,
        error: error,
      };
    default:
      return state;
  }
};
