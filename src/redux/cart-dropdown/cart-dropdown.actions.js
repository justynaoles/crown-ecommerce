import { CartDropdownActionTypes } from "./cart-dropdown.types";

export const toggleCartBasket = () => ({
    type: CartDropdownActionTypes.TOGGLE_CART_BASKET
});

export const hideCartBasket = () => ({
    type: CartDropdownActionTypes.HIDE_CART_BASKET
});