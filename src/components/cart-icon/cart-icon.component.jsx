import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as IconBag } from '../../assets/icon-bag.svg';
import { connect } from 'react-redux';
import {toggleCartBasket} from '../../redux/cart/cart.actions';
import { selectorCartItemsQuantity } from '../../redux/cart/cart.selectors';

const CartIcon = ({toggleCartBasket, itemCount}) => (
    <button type='button' className='cart-icon' onClick={toggleCartBasket}>
        <IconBag className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </button>
)

//get data about user
const mapStateProps = (state) => ({
    itemCount: selectorCartItemsQuantity(state)
  });

//make action
const mapDispatchToProps = (dispatch) => ({
    toggleCartBasket: () => dispatch(toggleCartBasket()),
});

export default connect(mapStateProps, mapDispatchToProps)(CartIcon);