import { combineReducers } from "redux";
import { charactersReducer } from "@redux/reducers/charactersReducer";

/**
 * rootReducers.
 * 
 * Purpose:
 * - Import all reducers.
 */
export const rootReducers = combineReducers({
    charactersReducer: charactersReducer // Get list of characters.
})