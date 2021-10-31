import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as IconBag } from '../../assets/icon-bag.svg';

const CartIcon = () => (
    <div className='cart-icon'>
        <IconBag className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)

export default CartIcon;