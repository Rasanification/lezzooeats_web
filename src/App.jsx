import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavigationBar/NavigationBar';

//import {BrowserRouter} from 'react-router-dom';
import Router from './Router';
// import Merchants from './components/Merchants/Merchants';
// import MerchantMenus from './components/MerchantMenus/MerchantMenus';
// import Navbar from './components/NavigationBar/NavigationBar';
// import SelectedCategories from './components/MerchantCategories/SelectedCategories'
// import Checkout from './components/Checkout/Checkout'
// import Categories from './components/NavigationBar/Categories';
const Navigation = (props) =>
  <Navbar>
        <NavLink to="/Merchants"/>
        <NavLink to="/MerchantMenus/:id"/>
        <NavLink to="/MerchantCategories/:id/:name"/>
        <NavLink to="/Checkout"/>  
  </Navbar>
class App extends Component {
  render() {
    return (
    <div>
      <Navigation />
      <Router />
    </div>
    );
  }
}

export default App;
