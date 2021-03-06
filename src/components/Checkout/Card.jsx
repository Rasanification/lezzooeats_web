import React, {Component} from 'react'
import { Card, Icon, Button, Dropdown, Grid, Input, } from 'semantic-ui-react'

export default class CheckoutCard extends Component {
  render() {

    const options = [
      { key: 1, text: '1', value: 1 },
      { key: 2, text: '2', value: 2 },
      { key: 4, text: '4', value: 4 },
      { key: 5, text: '5', value: 5 },
      { key: 6, text: '6', value: 6 },
      { key: 7, text: '7', value: 7 },
      { key: 8, text: '8', value: 8 },
      { key: 9, text: '9', value: 9 },
      { key: 10, text: '10', value: 10 },
    ]
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
    const sizeCardCheckOutCard={
      minWidth:393,
    };
    return (
      <Card fluid style={sizeCardCheckOutCard}>
        <Card.Content>
          <Card.Header style={styleHeaderCheckoutCard}>
            <p style={{fontSize:16,color:'#c7c3c3'}}>Your order from</p>
            <p style={{fontSize:24}}>PAUL (Stand)</p>
            <Button style={styleBtnHeaderCheckoutCard} fluid stackable primary>Checkout</Button>
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Description>
            <Grid stackable fluid columns={3}>
              <Grid.Column width={3}>
                <Dropdown compact selection options={options} defaultValue={options[0].value}/>
              </Grid.Column>
              <Grid.Column width={7}>
                <div>
                  <h4>Chicken Mix</h4>
                  <p>Tango Orange</p>
                  <p>Upgrade fries</p>
                  <a href="#" > Remove </a>
                </div>
              </Grid.Column>
              <Grid.Column style={{textAlign: 'right'}} width={6}>
                GBP6.99
              </Grid.Column>
            </Grid>
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <Card.Header style={styleHeaderCheckoutCard}>
            <Input style={{margin:20,marginTop:10}} fluid placeholder='Add note (extra sauce, no onions etc.)' />
            <Grid stackable>
              <Grid.Row columns={2} style={{margin:0, padding:0, color:'gray'}}>
                <Grid.Column style={{textAlign: 'left', fontSize:16,}}>Subtotal (1 item)</Grid.Column>
                <Grid.Column style={{textAlign: 'right', fontSize:16,}}>GBP2</Grid.Column>
              </Grid.Row>

              <Grid.Row columns={2} style={{margin:0, padding:0, color:'gray'}}>
                <Grid.Column style={{textAlign: 'left', fontSize:16,}}>Delivery Fee</Grid.Column>
                <Grid.Column style={{textAlign: 'right', fontSize:16,}}>GBP1</Grid.Column>
              </Grid.Row>

              <Grid.Row columns={2} style={{margin:0, padding:10}}>
                <Grid.Column style={{textAlign: 'left',}}>Total</Grid.Column>
                <Grid.Column style={{textAlign: 'right',}}>GBP3</Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Header>
        </Card.Content>
        {/*<Card.Content style={styleExtraCheckoutCard} extra>
          Add items to your basket and they’ll appear here.
        </Card.Content>*/}
      </Card>
    )
  }
}
