import { GET_COMICS, GET_COMICS_ERROR } from "@redux/types"
import axios from "axios"
import { marvelCredentials } from "@api/marvelCredentials"
import { marvelBaseUrl } from "@api/marvelBaseUrl"

/**
 * getComicsAction.
 * 
 * Puporse:
 * - Fetch characters from api.
 */
export const getComicsAction = () => async dispatch => {
    
    const response = await axios.get(`${marvelBaseUrl}/comics?${marvelCredentials}`)

    try {
        dispatch({
            type: GET_COMICS,
            comics: response.data.data
        })
    } catch (error) {
        dispatch({
            type: GET_COMICS_ERROR,
            comics: response.error
        })
    }

}