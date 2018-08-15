import React, { Component } from 'react';
import { Container,Grid, Input } from 'semantic-ui-react';
import MerchantCard from './MerchantCard';
<<<<<<< HEAD
import ProductModal from './ProductModal';
import {getMerchants} from '../fetch/Merchants';
=======
import { getAllMerchants } from '../fetch/Merchants';
>>>>>>> 00c9f028e114cf2cbd4d30756ffbc4b225e43d0b
class Merchants extends Component {
    constructor(props){
      super(props);
      this.state = {merchants:[]};
    }
    componentDidMount() {
      getAllMerchants().then((result)=> {
        this.setState({merchants:result.data});
      }).catch((error)=>{
      })
    }
    render() {
        return (
        <div style={{marginLeft:75,marginRight:75}}>
          <Input size='massive' icon='search' placeholder='Search...' fluid/>
          <br />
          <ProductModal/>
          <br />
          <Grid doubling stackable columns={3} style={{margin:0}}>
            {
              this.state.merchants.map((merchant) =>{
                return(
                  <Grid.Column>
                    <MerchantCard merchant={merchant}/>
                  </Grid.Column>
                )
              })
            }
          </Grid>
        </div>
        );
    }
}
// this is comment
export default Merchants;
