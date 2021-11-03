import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as IconBag } from '../../assets/icon-bag.svg';
import { connect } from 'react-redux';
import {toggleCartBasket} from '../../redux/cart/cart.actions';

const CartIcon = ({toggleCartBasket}) => (
    <div className='cart-icon' onClick={toggleCartBasket}>
        <IconBag className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)

//make action
const mapDispatchToProps = (dispatch) => ({
    toggleCartBasket: () => dispatch(toggleCartBasket())
});

export default connect(null, mapDispatchToProps)(CartIcon);