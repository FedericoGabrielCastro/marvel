import { GET_CHARACTER_DETAILS, GET_CHARACTER_DETAILS_ERROR, LOADING } from '@redux/types';

/**
 * InitialState.
 *
 * Purpose:
 * - Set initial state character reducer.
 */
export const initialState = {
  character: [],
  loading: true,
  error: null,
};

/**
 * characterDetailReducer.
 *
 * Purpose:
 * - Set info abaout one character.
 *
 * @param error error.*
 * @param type type.
 * @param character Character data.
 * @returns Character details.
 */
export const characterDetailReducer = (state = initialState, { type, character, error }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_CHARACTER_DETAILS:
      return {
        ...state,
        loading: false,
        character: character[0],
        error: null,
      };
    case GET_CHARACTER_DETAILS_ERROR:
      return {
        ...state,
        loading: true,
        error: error,
      };
    default:
      return state;
  }
};
