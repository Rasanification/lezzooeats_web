import React, { Component } from 'react'
import { Accordion, Icon, Grid, Image,Container } from 'semantic-ui-react'
import CategoryList from './CategoryList';

export default class Categories extends Component {
  state = { activeIndex: null }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state
    const categoriesStyle ={
      position:'absolute',
      zIndex:'999',
      padding:50,
      backgroundColor:'white',
      width:'70vw',
      marginTop:'5px',
      left:'0',
    }
    return (
      <Accordion>
        <Accordion.Title index={0} onClick={this.handleClick}>
          <Icon name='th' />
          Categories
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0} style={categoriesStyle}>
          
            <CategoryList/>
        </Accordion.Content>
      </Accordion>
    )
  }
}

