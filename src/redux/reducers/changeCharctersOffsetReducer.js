import { CHARACTERS_OFFSET_CHANGE } from '@redux/types';

/**
 * initialState.
 *
 * Purpose:
 * - set offset to search charactes.
 *
 */
const initialState = {
  offset: 0,
};

/**
 * changeCharctersOffsetReducer.
 *
 * Purpose:
 * - set offset to change number of characters to search.
 *
 * @param offset number
 * @returns offset number
 */
export const changeCharctersOffsetReducer = (state = initialState, { type, offset }) => {
  switch (type) {
    case CHARACTERS_OFFSET_CHANGE:
      return {
        offset: offset,
      };

    default:
      return state;
  }
};
