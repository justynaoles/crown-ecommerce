import React from 'react';
import { connect } from 'react-redux';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown hidden'>
        { cartItems.length < 1 ? <p>Your basket is empty, add something :)</p> : null}
        {
            cartItems.map(item => 
                <CartItem key={item.id} item={item}/>
            )
        }
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)


//get data about user
const mapStateProps = ({cart: {cartItems}}) => ({
    cartItems
  });

export default connect(mapStateProps)(CartDropdown);