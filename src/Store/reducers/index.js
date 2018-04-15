import { combineReducers } from "redux";
import * as actionType from '../actions/types';

function showNavBar(state = true, action) {
    if (action.type === actionType.TOGGLE_NAV) {
        return state = action.showNavBar;
    };
    return state;
}

export const rootReducer = combineReducers({
    showNavBar,
})