import { CHARACTERS_OFFSET_CHANGE } from '@redux/types';

/**
 * changeCharctersOffsetAction.
 *
 * Purpose:
 * - change offset characters.
 *
 * @param offset number offset
 * @returns number
 */
export const changeCharctersOffsetAction = ({ offset }) => ({
  type: CHARACTERS_OFFSET_CHANGE,
  offset,
});
