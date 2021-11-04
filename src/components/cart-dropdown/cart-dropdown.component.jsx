import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { hideCartBasket } from '../../redux/cart/cart.actions';
import { closeMobileMenu } from '../../redux/mobile-menu/mobile-menu.actions';

const CartDropdown = ({cartItems, history, hideCartBasket, closeMobileMenu}) => (
    <div className='cart-dropdown hidden'>
        { cartItems.length < 1 ? <p>Your basket is empty, add something :)</p> : null}
        {
            cartItems.map(item => 
                <CartItem key={item.id} item={item}/>
            )
        }
        <CustomButton  onClick={() => {history.push('/checkout'); hideCartBasket(); closeMobileMenu()}} >GO TO CHECKOUT</CustomButton>
    </div>
)


//get data about user
const mapStateProps = ({cart: {cartItems}}) => ({
    cartItems
  });

//make action
const mapDispatchToProps = (dispatch) => ({
    hideCartBasket: () => dispatch(hideCartBasket()),
    closeMobileMenu: () => dispatch(closeMobileMenu())
});

export default withRouter(connect(mapStateProps, mapDispatchToProps)(CartDropdown));