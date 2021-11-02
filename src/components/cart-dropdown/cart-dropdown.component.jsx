import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = () => (
    <div className='cart-dropdown hidden'>
        <div className='cart-item'>item</div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)


export default CartDropdown;