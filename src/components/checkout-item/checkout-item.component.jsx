import React from 'react';
import './checkout-item.styles.scss';

const CheckoutItem = ({item: {name, quantity, imageUrl, price}}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='' src={imageUrl}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price * quantity}</span>
        <button type='button' aria-label='remove item from basket' className='remove-button'>&#10005;</button>
    </div>
)

export default CheckoutItem;