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