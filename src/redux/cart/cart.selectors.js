import { createSelector } from 'reselect';

//state, take only cart part
const selectorCart = state => (
    state.cart
)

//take a state with only card part and take only cartItems from cart
export const selectorCartItems = createSelector(
    [selectorCart],
    cart => cart.cartItems

) 

//take a cartItems only and make calculation quant
export const selectorCartItemsQuantity = createSelector(
    [selectorCartItems],
    cartItems => cartItems.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.quantity;
      },0)
)


//take a cartItems only and make calculation total price
export const selectorCartItemsTotalPrice = createSelector(
    [selectorCartItems],
    cartItems => cartItems.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.quantity * currentValue.price;
      },0)
)