import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import Card from './Card'
import CheckLogin from './CheckLogin'
class Checkout extends Component {
    render() {
        return (
          <div style={{marginLeft:75,marginRight:75}}>
            <Grid stackable columns={2}>
                <Grid.Column width={10}>
                  <CheckLogin/>
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
