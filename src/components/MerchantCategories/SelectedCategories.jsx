import React, { Component } from 'react';
import { Container, Grid, Segment } from 'semantic-ui-react';
import MerchantCard from '../Merchants/MerchantCard';
import { getMerchantsBySpecialty } from '../../actions/Merchants';

class SelectedCategories extends Component {
    constructor(props){
      super(props);
      this.state = {merchants:[]};
    }

    componentDidMount() {
      getMerchantsBySpecialty(this.props.match.params.id).then((result)=> {
        this.setState({merchants:result.data});
      }).catch((error)=>{
      });
    }

    render() {
        return (
        <Container fluid>
          <br/>
          <Segment padded basic>
          <h1>{this.props.match.params.name}</h1>
          <Grid doubling stackable columns={3}>
            {this.state.merchants.map((merchant) =>{
              return(
                <Grid.Column>
                  <MerchantCard merchant={merchant}/>
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
export default SelectedCategories;
