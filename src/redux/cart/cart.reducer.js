import { CartActionTypes } from "./cart.types";
import { addItemToCart, decreaseItemsQuantity } from './cart.utils';

const INITIAL_STATE = {
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {        
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