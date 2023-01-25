import { GET_COMICS, GET_COMICS_ERROR } from "@redux/types"

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
}

/**
 * comicsReducer.
 * 
 * Purpose:
 * - Set comics list.
 * 
 * @param type type.
 * @param comics Result of axios get comics. 
 * @returns comics list
 */

export const comicsReducer = (state = initialState, { type, comics } ) => {
    
    switch (type) {
        case GET_COMICS:
            return {
                ...state,
                loading: false,
                comics: comics.results,

            }
        case GET_COMICS_ERROR:
            return {
                ...state,
                loading: true,
                error: error
            }
        default:
            return state
    }
}
