import { GET_CHARACTER_DETAILS, GET_CHARACTER_DETAILS_ERROR } from "@redux/types"
import axios from "axios"
import { marvelCredentials } from "@api/marvelCredentials"
import { marvelBaseUrl } from "@api/marvelBaseUrl"

/**
 * getCharacterDetailAction.
 * 
 * Purpose:
 * - Send to reducer all data of a one character.
 * 
 * @param id ID of character to show detail. 
 * @returns 
 */
export const getCharacterDetailAction = ({id}) => async dispatch  => {
    
    const response = await axios.get(`${marvelBaseUrl}/characters/${id}${marvelCredentials}`)

    try {
        dispatch({
            type: GET_CHARACTER_DETAILS,
            character: response.data.data.results
        })
    } catch (error) {
        dispatch({
            type: GET_CHARACTER_DETAILS_ERROR,
            character: response.error
        })
    }

}
