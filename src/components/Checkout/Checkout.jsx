import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import Card from './Card'
import LogedIn from './LogedIn'
import NotLogedIn from './NotLogedIn'
class Checkout extends Component {
    render() {
        return (
          <div style={{marginLeft:75,marginRight:75}}>
            <p style={{marginBottom:30,marginTop:30,fontSize:50}}>Checkout</p>
            <Grid stackable columns={2}>
                <Grid.Column width={10}>
                  <LogedIn/>
                </Grid.Column>
                <Grid.Column width={6}>
                  <Card/>
                </Grid.Column>
            </Grid>
          </div>

        );
    }
}
// this is comment
export default Checkout;
