import React from 'react';
import { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import 'normalize.css';
import '../node_modules/hamburgers/dist/hamburgers.min.css';



import Loader from './components/loader/loader.component';
import Header from './components/header/header.component';
import {connect} from 'react-redux';
import {setCurrentUser, checkUserSession} from './redux/user/user.action';
import { hideCartBasket } from './redux/cart-dropdown/cart-dropdown.actions';
import { selectorCurrentUser } from './redux/user/user.selectors';
import { shopCollectionsArr } from './redux/shop/shop.selectors';
import {closeMobileMenu} from './redux/mobile-menu/mobile-menu.actions';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const OpinionsPage = lazy(() => import('./pages/opinions/opinions.component'));
const Comments = lazy(() => import('./pages/comments/comments.component'));
const Sign = lazy(() => import('./pages/sign/sign.component'));
const Checkout =  lazy(() => import('./pages/checkout/checkout.component'));

const App = ({setCurrentUser, checkUserSession, hideCartBasket, closeMobileMenu}) => {

  useEffect(()=> {

    const bodyClick = (e) => {
      const target = e.target;
      const cart = document.getElementsByClassName('cart-dropdown')[0];
      const cartBtn = document.getElementsByClassName('cart-icon')[0];
      const mobileMenu = document.getElementsByClassName('options')[0];
      const mobileMenuBtn = document.getElementsByClassName('hamburger')[0];
  
  
      if(cart && cart !== target && !cart.contains(target) && cartBtn !== target && !cartBtn.contains(target) ) {
        hideCartBasket();
      }
  
      if(mobileMenu && mobileMenu !== target && !mobileMenu.contains(target) && mobileMenuBtn !== target && !mobileMenuBtn.contains(target) ) {
       closeMobileMenu();
      }
  
    };
  checkUserSession();
  document.addEventListener('click', (e) => bodyClick(e));
  },[checkUserSession, hideCartBasket, closeMobileMenu]);

  const {user} = setCurrentUser;

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Suspense fallback={<Loader />}>
        <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/opinions' component={OpinionsPage}/>
          <Route path='/comments' component={Comments}/>
          <Route exact path='/sign' render={() => user ? (<Redirect to='/'/>) : (<Sign/>)} />
          <Route exact path='/checkout' component={Checkout}/>
        </Suspense>
      </Switch>
    </div>
    );
  }


//get data about user and collection
const mapStateProps = (state) => ({
  user: selectorCurrentUser(state),
  collectionArray: shopCollectionsArr(state)
});

//action sign in sign out, hidde basket cart
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  checkUserSession: () => dispatch(checkUserSession()),
  hideCartBasket: () => dispatch(hideCartBasket()),
  closeMobileMenu: () => dispatch(closeMobileMenu())
});

export default connect(mapStateProps, mapDispatchToProps)(App);
