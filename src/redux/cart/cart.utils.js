export const addItemToCart = (cartItems, cartItemToAdd) => {

    const existingCardItem = cartItems.find(cartItem =>
        cartItem.id === cartItemToAdd.id
        );


    if(existingCardItem) {

        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id 
            ? 
            {...cartItem, quantity: cartItem.quantity + 1 }
            : 
            cartItem  
        )
    } else {
        return [...cartItems,{...cartItemToAdd, quantity: 1}]
    }
}

export const decreaseItemsQuantity = (cartItems, cartItemToDecrease) => {
    const itemExist = cartItems.find(item => item.id === cartItemToDecrease.id);

    if(itemExist.quantity === 1) {
        return cartItems.filter(item => item.id !== cartItemToDecrease.id)
    } else if(itemExist.quantity > 1) {
        return cartItems.map(item => item.id === cartItemToDecrease.id ? { ...item, quantity: item.quantity -1} : item )
    } else {
        return cartItems;
    }
}