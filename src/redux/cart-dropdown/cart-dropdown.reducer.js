import { CartDropdownActionTypes } from "./cart-dropdown.types"

const INITIAL_STATE = {
    cartHidden: true
}

const cartDropDownReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case CartDropdownActionTypes.TOGGLE_CART_BASKET:
            return {
                ...state,
                cartHidden: !state.cartHidden,
            }

        case CartDropdownActionTypes.HIDE_CART_BASKET:
            return {
                ...state,
                cartHidden: true,
            }

        default: 
            return state
    }
}

export default cartDropDownReducer;