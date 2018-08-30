import React, {Component} from 'react'
import { Card, Button, Grid, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'

import ProductModal from './ProductModal';

class CheckoutCard extends Component {
  // componentDidMount() {
  //   alert(this.props.cart)
  // }
  //
  // componentWillReceiveProps(nextProps) {
  //   alert(nextProps.cart[0].product_id)
  // }
  render() {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header style={{margin:10}}>
            <Button href="../Checkout" style={{padding:18,fontSize:18,}} fluid stackable negative>Checkout</Button>
          </Card.Header>
        </Card.Content>
        <Card.Content>
          {
            this.props.cart.length > 0 ?
            this.props.cart.map((product) =>{
              return(
                <Card.Description>
                  <Grid stackable fluid columns={3}>
                    <Grid.Column width={3}>
                      <Label>{product.amount}
                      </Label>
                    </Grid.Column>
                    <Grid.Column width={7}>
                      <div>
                        <a style={{color:'black'}}>
                          <h4>{product.product_name.en}</h4>
                          <p>Tango, fries,fries </p>
                        </a>
                        <Button onClick={() => this.props.removeFromCart(product) } style={{background:'transparent'}}> <a>Remove </a> </Button>
                      </div>
                    </Grid.Column>
                    <Grid.Column style={{textAlign: 'right'}} width={6}>
                      {product.product_price*product.amount} IQD
                    </Grid.Column>
                  </Grid>

                </Card.Description>
              )
            })
            :null
          }
        </Card.Content>
        <Card.Content>
          <Card.Header style={{margin:10}}>
            <div>
              <div style={{float:'left'}}>Subtotal (1 item)</div>
              <div style={{float:'right'}}>GBP7.99</div>
            </div>
          </Card.Header>
        </Card.Content>
        {/*<Card.Content style={{padding:20,fontSize:17,}} extra>
          Add items to your basket and they’ll appear here.
        </Card.Content>*/}
      </Card>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutCard)
