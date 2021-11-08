import { CartActionTypes } from "./cart.types";

export const toggleCartBasket = () => ({
    type: CartActionTypes.TOGGLE_CART_BASKET
});

export const hideCartBasket = () => ({
    type: CartActionTypes.HIDE_CART_BASKET
});

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItem = (item) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});
