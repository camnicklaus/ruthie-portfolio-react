import * as actionType from './types';

export const toggleNavBar = (showNavBar) => {
    return {
        type: actionType.TOGGLE_NAV,
        showNavBar
    };
}