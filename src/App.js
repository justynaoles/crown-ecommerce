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
import { auth, createUserProfileDocument } from './firebase/firebase.utils'; 
import {connect} from 'react-redux';
import setCurrentUser from './redux/user/user.action';
import { hideCartBasket } from './redux/cart/cart.actions';
import { selectorCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {


  bodyClick = (e) => {
    const { hideCartBasket } = this.props;
    const target = e.target;
    const cart = document.getElementsByClassName('cart-dropdown')[0];
    const cartBtn = document.getElementsByClassName('cart-icon')[0];


    if(cart && cart !== target && !cart.contains(target) && cartBtn !== target && !cartBtn.contains(target) ) {
      hideCartBasket();
    }

  };


  unsubscribeFromAuth = null;
    
  componentDidMount() {

    document.addEventListener('click', (e) => this.bodyClick(e));


    //user sign in sign out
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

        const {setCurrentUser} = this.props;

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

//get data about user
const mapStateProps = (state) => ({
  user: selectorCurrentUser(state),
});

//action sign in sign out, hidde basket cart
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  hideCartBasket: () => dispatch(hideCartBasket()) 
});

export default connect(mapStateProps, mapDispatchToProps)(App);
