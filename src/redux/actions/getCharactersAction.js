import { GET_CHARACTERS, GET_CHARACTERS_ERROR } from "@redux/types"
import axios from "axios"
import { marvelCredentials } from "@api/marvelCredentials"
import { marvelBaseUrl } from "@api/marvelBaseUrl"

/**
 * getCharactersAction.
 * 
 * Puporse:
 * - Fetch characters from api.
 * 
 * @param offset Numer to know pagination.
 */
export const getCharactersAction = ({offset}) => async dispatch => {
    
    const response = await axios.get(`${marvelBaseUrl}/characters?limit=20&offset=${offset}&${marvelCredentials}`)

    try {
        dispatch({
            type: GET_CHARACTERS,
            characters: response.data
        })
    } catch (error) {
        dispatch({
            type: GET_CHARACTERS_ERROR,
            characters: response.error
        })
    }

}
