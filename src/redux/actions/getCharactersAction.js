import { GET_CHARACTERS, GET_CHARACTERS_ERROR } from "../types"
import axios from "axios"
import { marvelCredentials } from "../../api/marvelCredentials"
import { marvelBaseUrl } from "../../api/marvelBaseUrl"

/**
 * getCharactersAction.
 * 
 * Puporse:
 * - Fetch characters from api.
 */
export const getCharactersAction = () => async dispatch => {
    
    const data = await axios.get(`${marvelBaseUrl}/characters${marvelCredentials}`)

    try {
        dispatch({
            type: GET_CHARACTERS,
            characters: data.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_CHARACTERS_ERROR,
            characters: data.error
        })
    }

}
