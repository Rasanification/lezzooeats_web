import React, { Component } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'

export default class MerchantFoodCategories extends Component {

  state = { activeItem: 'Breakfast Boxes' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const styleMenu={
      // background:'pink',
      padding:4,
      paddingLeft:30,
      paddingRight:30,
      margin:0,
    };
    const options = [
      { key: 1, text: 'Breakfast Menu', value: 1 },
      { key: 2, text: 'Main Menu', value: 2},
    ]
    return (
      <Menu secondary style={styleMenu}>
        <Menu compact>
          <Dropdown defaultValue={options[0].value} compact selection options={options} />
        </Menu>
        <Menu.Item name='Breakfast Boxes' active={activeItem === 'Breakfast Boxes'} onClick={this.handleItemClick} />
        <Menu.Item
          name='Big Breakfast Bundle'
          active={activeItem === 'Big Breakfast Bundle'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Good Morning Muffins'
          active={activeItem === 'Good Morning Muffins'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Magic Porridge Pots (With Cashew or Cows Milk)'
          active={activeItem === 'Magic Porridge Pots (With Cashew or Cows Milk)'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Dropdown icon='angle down' item text='More' position='right'>
            <Dropdown.Menu>
              <Dropdown.Item>Breakfast Boxes test</Dropdown.Item>
              <Dropdown.Item>Medium</Dropdown.Item>
              <Dropdown.Item>Large</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>

      </Menu>
    )
  }
}
