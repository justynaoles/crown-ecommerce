import React from 'react';
import { connect } from 'react-redux';
import './checkout.styles.scss';
import { selectorCartItemsTotalPrice, selectorCartItems } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckout from '../../components/stripe-checkout/stripe-checkout.component';

const Checkout = ({totalPrice, cartItems}) => {

    return  ( 
        <section className='checkout-page'>
            <header className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </header>


            {
                cartItems.map(item => <CheckoutItem key={item.id} item={item}/>)
            }

            <div className='total'>${totalPrice}</div>
            <StripeCheckout price={totalPrice}/>

        </section>
    ) 
}

//get data about total price
const mapStateProps = (state) => ({
    totalPrice: selectorCartItemsTotalPrice(state),
    cartItems: selectorCartItems(state)
})

export default connect(mapStateProps)(Checkout);