import { combineReducers } from "redux";
import { charactersReducer } from "@redux/reducers/charactersReducer";
import { characterDetailReducer } from "@redux/reducers/characterDetailReducer";
import { comicsReducer } from "@redux/reducers/comicsReducer";

/**
 * rootReducers.
 * 
 * Purpose:
 * - Import all reducers.
 */
export const rootReducers = combineReducers({
    charactersReducer: charactersReducer, // Get list of characters.
    characterDetailReducer: characterDetailReducer, // Get info about one character.
    comicsReducer: comicsReducer // Get comics list.
})