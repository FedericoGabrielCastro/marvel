import { GET_CHARACTERS, GET_CHARACTERS_ERROR } from "../types"

/**
 * InitialState.
 * 
 * Purpose:
 * - Set initial state to charcacters reducer.
 */
export const initialState = {
    characters: [],
    error: null,
    loading: true
}

/**
 * charactersReducer.
 * 
 * Purpose:
 * - Set characters list.
 * 
 * @param type type.
 * @param characters Result of axios get characters. 
 * @returns 
 */
export const charactersReducer = (state = initialState, { type, characters } ) => {
    
    switch (type) {
        case GET_CHARACTERS:
            return {
                ...state,
                loading: false,
                characters: characters,

            }
        case GET_CHARACTERS_ERROR:
            return {
                ...state,
                loading: true,
                error: characters
            }
        default:
            return state
    }
}
