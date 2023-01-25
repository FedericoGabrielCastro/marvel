import { GET_CHARACTERS, GET_CHARACTERS_ERROR } from "@redux/types"
import axios from "axios"
import { marvelCredentials } from "@api/marvelCredentials"
import { marvelBaseUrl } from "@api/marvelBaseUrl"

/**
 * getCharactersAction.
 * 
 * Puporse:
 * - Fetch characters from api.
 */
export const getCharactersAction = () => async dispatch => {
    
    const response = await axios.get(`${marvelBaseUrl}/characters${marvelCredentials}`)

    try {
        dispatch({
            type: GET_CHARACTERS,
            characters: response.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_CHARACTERS_ERROR,
            characters: response.error
        })
    }

}
