import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import Merchants from './components/Merchants/Merchants';
import MerchantMenus from './components/MerchantMenus/MerchantMenus';
import Navbar from './components/NavigationBar/NavigationBar';
import MerchantCategories from './components/MerchantCategories/Categories'
import Checkout from './components/Checkout/Checkout'
// import Categories from './components/NavigationBar/Categories';

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Navbar/>
          <Route exact path="/Merchants" component={Merchants} />
          <Route path="/MerchantMenus/:id" component={MerchantMenus} />
          <Route path="/MerchantCategories/:id" component={MerchantCategories} />
          <Route path="/Checkout" component={Checkout} />

        </div>
      </Router>
    );
  }
}

export default App;
