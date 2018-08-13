import React, { Component } from 'react'
import { Accordion, Icon, Grid, Image,Container,Menu } from 'semantic-ui-react'
import CategoryList from './CategoryList';
import CategoryListImage from './CategoryListImage';

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
        <Grid columns={2} stackable>
          <Grid.Column>
            <Grid.Row>
              <p>All categories</p>
            </Grid.Row>
            <Grid.Row>
                  <Grid textAlign='center' columns={3}>
                    <Grid.Row>
                      <Grid.Column>
                        <Menu fluid vertical>
                          <Menu.Item className='header'>Cats</Menu.Item>
                        </Menu>
                      </Grid.Column>
                      <Grid.Column>
                        <Menu fluid vertical>
                          <Menu.Item className='header'>Dogs</Menu.Item>
                          <Menu.Item>Poodle</Menu.Item>
                          <Menu.Item>Cockerspaniel</Menu.Item>
                        </Menu>
                      </Grid.Column>
                      <Grid.Column>
                        <Menu fluid vertical>
                          <Menu.Item className='header'>Monkeys</Menu.Item>
                        </Menu>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column>
            <Grid>
            <Grid.Row>
              <p>Popular categories</p>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={3} >
                <CategoryListImage/>
              </Grid.Column>
              <Grid.Column width={3} >
                <CategoryListImage/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row >
              <Grid.Column width={3} >
                <CategoryListImage/>
              </Grid.Column>
              <Grid.Column width={3} >
                <CategoryListImage/>
              </Grid.Column>
            </Grid.Row>
            </Grid>
          </Grid.Column>

        </Grid>

        </Accordion.Content>
      </Accordion>
    )
  }
}
