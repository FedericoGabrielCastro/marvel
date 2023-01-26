import { GET_CHARACTERS, GET_CHARACTERS_ERROR, LOADING } from '@redux/types';

/**
 * InitialState.
 *
 * Purpose:
 * - Set initial state to charcacters reducer.
 */
export const initialState = {
  characters: [],
  totalResults: null,
  error: null,
  loading: true,
};

/**
 * charactersReducer.
 *
 * Purpose:
 * - Set characters list.
 *
 * @param error error.
 * @param type type.
 * @param characters Result of axios get characters.
 * @returns characters list.
 */
export const charactersReducer = (state = initialState, { type, characters, error }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_CHARACTERS:
      return {
        ...state,
        loading: false,
        characters: characters.data.results,
        totalResults: characters.data.total,
        error: null,
      };
    case GET_CHARACTERS_ERROR:
      return {
        ...state,
        loading: true,
        error: error,
      };
    default:
      return state;
  }
};
