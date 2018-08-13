import React, { Component } from 'react';
import { Grid, Menu, Dropdown, Sticky, Segment} from 'semantic-ui-react';
import './MerchantMenus.css';
import Scrollspy from 'react-scrollspy';

export default class MerchantFoodCategories extends Component {
  /////////// sticky ///////////
  state = { active: true }
  handleContextRef = contextRef => this.setState({ contextRef })
  handleToggle = () => this.setState({ active: !this.state.active })
  //////////////////////////////

  state = { activeItem: 'Breakfast Boxes' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    ////////////// css /////////////////
    const styleMenu={
      background:'white',
      padding:4,
      paddingLeft:30,
      paddingRight:30,
      margin:0,
    };
    const zeropad={
      margin:0,
      padding:0,
    };
    ////////////////////////////////////
    const { active, contextRef } = this.state
    const { activeItem } = this.state


    return (
      <div  ref={this.handleContextRef}>
        <Segment style={zeropad}>
          <Sticky context={contextRef} >
            <Segment style={zeropad}>
              <Menu secondary style={styleMenu}>
                <Scrollspy items={ ['section-1', 'section-2', 'section-3', 'section-4', 'section-5', 'section-6', 'section-7'] } style={{display:"inherit"}} currentClassName="active"  componentTag="div">

                  <Menu.Item href="#section-1" name='Breakfast Boxes'  onClick={this.handleItemClick} />
                  <Menu.Item
                    href="#section-2"
                    name='Big Breakfast Bundle'
                    active={activeItem === 'Big Breakfast Bundle'}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    href="#section-3"
                    name='Good Morning Muffins'
                    active={activeItem === 'Good Morning Muffins'}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    href="#section-4"
                    name='Magic Porridge Pots (With Cashew or Cows Milk)'
                    active={activeItem === 'Magic Porridge Pots (With Cashew or Cows Milk)'}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Menu position='right'>
                    <Dropdown icon='angle down' item text='More' position='right'>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#section-5">Breakfast Boxes test</Dropdown.Item>
                        <Dropdown.Item href="#section-6">Medium</Dropdown.Item>
                        <Dropdown.Item href="#section-7">Large</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Menu.Menu>
                </Scrollspy>
              </Menu>
            </Segment>
          </Sticky>
          <Grid centered columns={2}>
            <Grid.Column width={10}>
              <div>
                <section id="section-1">
                  <div style={{"min-height":'500px'},{background:'red'}}>1
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                  </div>
                </section>
                <section id="section-2">
                  <div style={{height:'500px'},{background:'green'}}>2
                  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                  </div>
                </section>
                <section id="section-3">
                  <div style={{height:500},{background:'blue'}}>3
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                  </div>
                </section>
                <section id="section-4">
                  <div style={{height:500},{background:'yellow'}}>4
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                  </div>
                </section>
                <section id="section-5">
                  <div style={{height:500},{background:'gray'}}>5
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                  </div>
                </section>
                <section id="section-6">
                  <div style={{height:500},{background:'purple'}}>5
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                  </div>
                </section>
                <section id="section-7">
                  <div style={{height:500},{background:'black'}}>5
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                  </div>
                </section>
              </div>
            </Grid.Column>
            <Grid.Column width={6}>
              <Sticky context={contextRef} offset={100} >
                <Segment style={zeropad}>
                  <h1>>:(</h1>
                </Segment>
              </Sticky>
            </Grid.Column>
          </Grid>
        </Segment>

      </div>
    )
  }
}
