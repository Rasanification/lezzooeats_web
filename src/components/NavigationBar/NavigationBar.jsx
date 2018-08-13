import React, { Component } from 'react';
import { Container,Button, Input, Menu, Accordion, Icon, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Categories from './Categories';

class NavigationBar extends Component {
    render() {
        return (
          <Menu stackable>
            <Menu.Item>
              <img src='https://react.semantic-ui.com/logo.png' />
            </Menu.Item>
            <Menu.Item name='Merchants' href='../Merchants'/>
            <Menu.Item name='MerchantMenus' href='../MerchantMenus'/>
            <Menu.Item>
              <Categories />
            </Menu.Item>
          </Menu>
        );
    }
}

export default NavigationBar;
