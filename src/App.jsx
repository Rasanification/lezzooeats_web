import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './resources/App.css';
import Navbar from './components/NavigationBar/NavigationBar';
import Router from './Router';

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
