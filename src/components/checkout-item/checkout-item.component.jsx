import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import { removeItem, addItem, decreaseItemQuantity } from '../../redux/cart/cart.actions';

const CheckoutItem = ({item, removeItem, addItem, decreaseItemQuantity}) => {
    const { name, quantity, imageUrl, price } = item;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='' src={imageUrl}/>
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'>
                <button type='button' aria-label='decrease item quantity' className='arrow' onClick={()=> decreaseItemQuantity(item)}>&#10094;</button>
                <span>{quantity}</span>
                <button type='button' aria-label='increase item quantity' className='arrow' onClick={()=> addItem(item)}>&#10095;</button>
            </div>
            <span className='price'>{price * quantity}</span>
            <button type='button' aria-label='remove item from basket' onClick={()=> removeItem(item)} className='remove-button'>&#10005;</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    removeItem: (item) => dispatch(removeItem(item)),
    addItem: (item) => dispatch(addItem(item)),
    decreaseItemQuantity: (item) => dispatch(decreaseItemQuantity(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);