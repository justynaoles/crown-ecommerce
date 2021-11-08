import { CartActionTypes } from "./cart.types";
import { addItemToCart, decreaseItemsQuantity } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_BASKET:
            return {
                ...state,
                hidden: !state.hidden,
            }

        case CartActionTypes.HIDE_CART_BASKET:
            return {
                ...state,
                hidden: true,
            }
        
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }

        case CartActionTypes.DECREASE_ITEM_QUANTITY:
            return {
                ...state,
                cartItems: decreaseItemsQuantity(state.cartItems, action.payload)
            }

        default: 
            return state
    }
}

export default cartReducer;