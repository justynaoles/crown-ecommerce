import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import 'normalize.css';
import '../node_modules/hamburgers/dist/hamburgers.min.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Sign from './pages/sign/sign.component';
import Checkout from './pages/checkout/checkout.component';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils'; 
import {connect} from 'react-redux';
import setCurrentUser from './redux/user/user.action';
import { hideCartBasket } from './redux/cart-dropdown/cart-dropdown.actions';
import { selectorCurrentUser } from './redux/user/user.selectors';
import { shopCollectionsArr } from './redux/shop/shop.selectors';
import {closeMobileMenu} from './redux/mobile-menu/mobile-menu.actions';

class App extends React.Component {


  bodyClick = (e) => {
    const { hideCartBasket, closeMobileMenu } = this.props;
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


  unsubscribeFromAuth = null;
    
  componentDidMount() {

    document.addEventListener('click', (e) => this.bodyClick(e));


    //user sign in sign out
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

        const {setCurrentUser, collectionArray} = this.props;

        //if user logged in
        if(userAuth) {

          //we check if there is record for user in DB
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot( snapShot => {
            setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
            })
          })
        }  else {
          addCollectionAndDocuments('collection', collectionArray);
          setCurrentUser(userAuth);
        }
      
      });
    }

  componentWillUnmount(){
  this.unsubscribeFromAuth();
  }

  render() {
    const {user} = this.props;
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/sign' render={() => user ? (<Redirect to='/'/>) : (<Sign/>)} />
          <Route exact path='/checkout' component={Checkout}/>
        </Switch>
      </div>
    );
  }
}

//get data about user and collection
const mapStateProps = (state) => ({
  user: selectorCurrentUser(state),
  collectionArray: shopCollectionsArr(state)
});

//action sign in sign out, hidde basket cart
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  hideCartBasket: () => dispatch(hideCartBasket()),
  closeMobileMenu: () => dispatch(closeMobileMenu())
});

export default connect(mapStateProps, mapDispatchToProps)(App);
