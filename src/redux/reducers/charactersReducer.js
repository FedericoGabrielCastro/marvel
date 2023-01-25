import { GET_CHARACTERS, GET_CHARACTERS_ERROR } from "@redux/types"

/**
 * InitialState.
 * 
 * Purpose:
 * - Set initial state to charcacters reducer.
 */
export const initialState = {
    characters: [],
    error: null,
    loading: true,
    offset: null,
    total: null,
    count: null,
}

/**
 * charactersReducer.
 * 
 * Purpose:
 * - Set characters list.
 * 
 * @param type type.
 * @param characters Result of axios get characters. 
 * @returns characters list.
 */
export const charactersReducer = (state = initialState, { type, characters } ) => {
    
    switch (type) {
        case GET_CHARACTERS:
            return {
                ...state,
                loading: false,
                characters: characters.results,
                offset: characters.offset,
                limit: characters.limit,
                total: characters.total,
                count: characters.count

            }
        case GET_CHARACTERS_ERROR:
            return {
                ...state,
                loading: true,
                error: error
            }
        default:
            return state
    }
}
