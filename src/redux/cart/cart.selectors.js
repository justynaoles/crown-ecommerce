import { createSelector } from 'reselect';

//state, take only cart part
const selectorCart = state => (
    state.cart
)

//take a state only card part and take only hidden value
export const selectorHiddenCart = createSelector(
    [selectorCart],
    cart => cart.hidden
)

//take a state with only card part and take only cartItems from cart
export const selectorCartItems = createSelector(
    [selectorCart],
    cart => cart.cartItems

) 


//take a cartItems only and make calculation
export const selectorCartItemsQuantity = createSelector(
    [selectorCartItems],
    cartItems => cartItems.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.quantity;
      },0)
)