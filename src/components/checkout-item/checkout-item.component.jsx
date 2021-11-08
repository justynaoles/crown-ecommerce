import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import { removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({item, removeItem}) => {
    const { name, quantity, imageUrl, price } = item;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='' src={imageUrl}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price * quantity}</span>
            <button type='button' aria-label='remove item from basket' onClick={()=> removeItem(item)} className='remove-button'>&#10005;</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    removeItem: (item)=> dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);