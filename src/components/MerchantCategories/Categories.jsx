import React, { Component } from 'react';
import { Container, Grid, Input } from 'semantic-ui-react';
import MerchantCard from '../Merchants/MerchantCard';
import {getCategoryMerchants} from '../fetch/CategoryMerchants';

class MerchantCategories extends Component {
    constructor(props){
      super(props);
      this.state = {merchants:[]};
    }
    componentDidMount() {
      getCategoryMerchants(this.props.match.params.id).then((result)=> {
        this.setState({merchants:result.data});
      }).catch((error)=>{
      })
    }
    
    render() {
        return (
        <Container>
          <Input size='massive' icon='search' placeholder='Search...' fluid/>
          <br />
          <Grid doubling stackable columns={3}>
            {this.state.merchants.map((categorymerchant) =>{
              return(
                <Grid.Column>
                  <MerchantCard merchant={categorymerchant}/>
                </Grid.Column>
              )
            })
          }
          </Grid>
        </Container>
        );
    }
}
// this is comment
export default MerchantCategories;
