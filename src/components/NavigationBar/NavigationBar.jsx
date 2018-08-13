import React, { Component } from 'react';
import { Container,Button, Input, Menu, Accordion, Icon, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import CategoriesModal from './CategoriesModal';

class NavigationBar extends Component {
    render() {
        return (
          <Menu stackable>
<<<<<<< HEAD
            <Menu.Item>
              <img src='https://react.semantic-ui.com/logo.png' />
            </Menu.Item>
            <Menu.Item name='Merchants' href='../Merchants'/>
            <Menu.Item name='MerchantMenus' href='../MerchantMenus'/>
            <Menu.Item>
              <Categories />
            </Menu.Item>
          </Menu>
=======
          <Menu.Item><img src='https://react.semantic-ui.com/logo.png' /></Menu.Item>
          <Menu.Item name='Merchants' href='../Merchants'/>
          <Menu.Item name='MerchantMenus' href='../MerchantMenus'/>
          <Menu.Item>
            <CategoriesModal/>
          </Menu.Item>
          <Menu.Item>
            <Categories/>
          </Menu.Item>
        </Menu>
>>>>>>> 5e1a338f2049d21d0fc211c6277223ccb94e3951
        );
    }
}

export default NavigationBar;
