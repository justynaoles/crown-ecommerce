import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import 'normalize.css';
import '../node_modules/hamburgers/dist/hamburgers.min.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Sign from './pages/sign/sign.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'; 

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;
    
  componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async user =>{
        this.setState({currentUser: user}, ()=> {
        });
      createUserProfileDocument(user);
      });
    }

  componentWillUnmount(){
  this.unsubscribeFromAuth();
  }

  render() {
    const {currentUser} = this.state;
    
    return (
      <div className="App">
        <Header user={currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/sign' component={() => <Sign user={currentUser} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
