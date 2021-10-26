import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'normalize.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Sign from './pages/sign/sign.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/sign' component={Sign}/>
      </Switch>
    </div>
  );
}

export default App;
