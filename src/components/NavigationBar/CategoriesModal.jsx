import React, { Component } from 'react'
import { Button, Header, Image, Modal, Icon, Grid,Menu } from 'semantic-ui-react'
import CategoryListImage from './CategoryListImage';
import CategoryCard from './CategoryCard';
import {getCategories} from '../fetch/Categories';

class CategoriesModal extends Component {
    constructor(props){
      super(props);
      this.state = {categories:[]};
    }
    componentDidMount() {
      getCategories().then((result)=> {
        this.setState({categories:result.data});
      }).catch((error)=>{

      })
    }
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        <Button onClick={this.show(true)}><Icon name='th' />Categories</Button>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Select a Category</Modal.Header>
          <Modal.Content>
          <Grid doubling stackable columns={4}>
              {this.state.categories.map((category) =>{
                    return(
                      <Grid.Column>
                        <CategoryCard category={category}/>

                      </Grid.Column>
                    )
                  })
              }
          </Grid>
          </Modal.Content>
          <Modal.Actions>
            <Button color='red' onClick={this.close}>
              Close
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default CategoriesModal
