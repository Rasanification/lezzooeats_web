import React, {Component} from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'

export default class CheckoutCard extends Component {
  render() {
    const styleHeaderCheckoutCard={
      // padding:0,
      margin:10,
    };
    const styleExtraCheckoutCard={
      padding:20,
      fontSize:17,
    };
    const styleBtnHeaderCheckoutCard={
      padding:18,
      fontSize:18,
    };
    return (
      <Card fluid stackable>
        <Card.Content>
          <Card.Header style={styleHeaderCheckoutCard}>
            <Button style={styleBtnHeaderCheckoutCard} fluid stackable negative>Checkout</Button>
          </Card.Header>
        </Card.Content>
        <Card.Content style={styleExtraCheckoutCard} extra>
          Add items to your basket and they’ll appear here.
        </Card.Content>
      </Card>
    )
  }
}
