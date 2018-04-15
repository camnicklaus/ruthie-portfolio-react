import * as actionType from './types';

export const toggleNavBar = (showNavBar) => {
    console.log('action called, ', showNavBar)
    return {
        type: actionType.TOGGLE_NAV,
        showNavBar
    };
}