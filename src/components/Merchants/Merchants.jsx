import React, { Component } from 'react';
import {Container,Grid, Input, Segment } from 'semantic-ui-react';
import MerchantCard from './MerchantCard';
import { getAllMerchants } from '../../actions/Merchants';
class Merchants extends Component {
    constructor(props){
      super(props);
      this.state = {
        merchants:[],
        search : ''
      };
    }
    componentDidMount() {
      getAllMerchants().then((result)=> {
        this.setState({merchants:result.data});
      }).catch((error)=>{
      })
    }
    updateSearch(event){
      this.setState({search:event.target.value.substr(0,20)})
    }
    render() {
        let filteredMerchants = this.state.merchants.filter(
          (merchant) => {
            return merchant.merchant_name.en.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
          }
        );
        return (
        <Container fluid>
          <Segment basic>
            <Input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} size='massive' icon='search' placeholder='Search...' fluid/>
          </Segment>
          <Segment basic>
            <Grid doubling stackable columns={3} style={{margin:0}}>
              {
                filteredMerchants.map((merchant) =>{
                  return(
                    <Grid.Column>
                      <MerchantCard merchant={merchant} key={merchant.merchant_id}/>
                    </Grid.Column>
                  )
                })
              }
            </Grid>
          </Segment>
        </Container>
        );
    }
}
// this is comment
export default Merchants;
