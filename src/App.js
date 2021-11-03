import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import 'normalize.css';
import '../node_modules/hamburgers/dist/hamburgers.min.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Sign from './pages/sign/sign.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'; 
import {connect} from 'react-redux';
import setCurrentUser from './redux/user/user.action';

class App extends React.Component {

  unsubscribeFromAuth = null;
    
  componentDidMount() {
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
    
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/sign' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<Sign/>)} />
        </Switch>
      </div>
    );
  }
}

//get data about user
const mapStateProps = ({user}) => ({
  currentUser: user.currentUser
});

//action sign in sign out
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) 
});

export default connect(mapStateProps, mapDispatchToProps)(App);
