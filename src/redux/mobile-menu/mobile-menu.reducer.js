import { MobileMenuActionTypes } from "./mobile-menu.types"

const INITIAL_STATE = {
    isMobileMenuHidden: true,
    isAriaExpanded: false
}

const mobileMenuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case  MobileMenuActionTypes.TOGGLE_MOBILE_MENU:
            return {
                ...state,
                isMobileMenuHidden: !state.isMobileMenuHidden,
                isAriaExpanded: !state.isAriaExpanded
            }

        case  MobileMenuActionTypes.CLOSE_MOBILE_MENU:
            return {
                ...state,
                isMobileMenuHidden: true,
                isAriaExpanded: false
            }

        default: 
            return state
    }
}

export default mobileMenuReducer;