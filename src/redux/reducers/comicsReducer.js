import { GET_COMICS, GET_COMICS_ERROR, LOADING } from '@redux/types';

/**
 * InitialState.
 *
 * Purpose:
 * - Set initial state to charcacters reducer.
 */
export const initialState = {
  comics: [],
  error: null,
  loading: true,
};

/**
 * comicsReducer.
 *
 * Purpose:
 * - Set comics list.
 *
 * @param error error.
 * @param type type.
 * @param comics Result of axios get comics.
 * @returns comics list
 */

export const comicsReducer = (state = initialState, { type, comics, error }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_COMICS:
      return {
        ...state,
        loading: false,
        comics: comics.results,
        error: null,
      };
    case GET_COMICS_ERROR:
      return {
        ...state,
        loading: true,
        error: error,
      };
    default:
      return state;
  }
};
