import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { rootReducers } from './reducers/rootReducers';

/**
 * Store.
 *
 * Purpose:
 * - Provider a global state.
 */

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));
