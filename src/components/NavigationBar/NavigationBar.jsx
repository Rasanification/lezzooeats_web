import React, { Component } from 'react';
import { Container,Button, Input, Menu, Accordion, Icon, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import CategoriesModal from './CategoriesModal';

class NavigationBar extends Component {
    render() {
        return (
          <Menu stackable>
            <Menu.Item><img src='http://news.lezzooeats.com/wp-content/uploads/2018/07/lezzoo512512.png' /></Menu.Item>
            <Menu.Item name='Merchants' href='../Merchants'/>
            <Menu.Item name='MerchantMenus' href='../MerchantMenus'/>
            <Menu.Item>
              <CategoriesModal/>
            </Menu.Item>
          </Menu>
        );
    }
}

export default NavigationBar;
