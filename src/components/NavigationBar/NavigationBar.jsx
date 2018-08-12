import React, { Component } from 'react';
import { Button, Input, Menu, Accordion, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Categories from './Categories';

class NavigationBar extends Component {
    render() {
        return (
          <Menu secondary>
          <Menu.Item name='Merchants' href='../Merchants'/>
          <Menu.Item name='MerchantMenus' href='../MerchantMenus'/>

          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item
              name='logout'
            />
          </Menu.Menu>
        </Menu>
        );
    }
}

export default NavigationBar;
