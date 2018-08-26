import React, { Component } from 'react';
import {Menu} from 'semantic-ui-react';
import CategoriesModal from './CategoriesModal';

class NavigationBar extends Component {
    render() {
        return (
          <Menu stackable>
            <Menu.Item><img src='http://news.lezzooeats.com/wp-content/uploads/2018/07/lezzoo512512.png' /></Menu.Item>
            <Menu.Item name='Merchants' href='/Merchants'/>
            <Menu.Item>
              <CategoriesModal/>
            </Menu.Item>
          </Menu>
        );
    }
}

export default NavigationBar;
