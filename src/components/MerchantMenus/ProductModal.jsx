import React, { Component } from 'react';
import { Button, Header, Icon, Modal, Form, Radio, Grid, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'

class ProductModal extends Component {
  constructor(props) {
    super(props);
    this.state = { amount: 1, open: false };
    this.incLabel = this.incLabel.bind(this);
    this.decLabel = this.decLabel.bind(this);
  }
  incLabel() {
    // const newLabel = this.state.amount == 1 ? 2 : 3;
    this.setState({ amount: this.state.amount + 1 });
  }
  decLabel() {
    if (this.state.amount > 1) {
      this.setState({ amount: this.state.amount - 1 });
    }
  }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {

    const { open, dimmer } = this.state
    const product = this.props.product;

    return (
      <Modal
        dimmer={dimmer} open={open} onClose={this.close}
        size='small'
        trigger={<Button positive onClick={this.show(true)} >Order</Button>}
        style={{ margin: 0, padding: 0 }}
      >
        <Modal.Content scrolling style={{ maxHeight: 500, height: 500, margin: 0, padding: 0 }}>
          <div style={{ height: 350, width: '100%', margin: 0, padding: 0, backgroundSize: 'cover', backgroundPositionY: '50%', backgroundImage: `url(${product ? product.product_image : null})`, }}>
            <Button onClick={this.close} style={{ height: 50, width: 50, borderRadius: 100, padding: 0, paddingLeft: 10, background: 'transparent', float: 'right', margin: 20, color: 'white' }}>
              <Icon name='close' />
            </Button>
          </div>
          <Modal.Description style={{ margin: 50 }}>
            <Header style={{ fontSize: 38 }}>{product ? product.product_name.en : null}</Header>
            <p style={{ fontSize: 16, color: 'gray', padding: 4 }}>{product ? product.product_description.en : null}</p>

            <Form style={{ margin: 5, marginTop: 40 }}>
              {
                this.props.product?
                this.props.product.product_addons?
                this.props.product.product_addons.length > 0?
                this.props.product.product_addons.map((addon) =>{

                  return(
                    <Form.Group grouped>
                      <div style={{fontSize:20,paddingBottom:15}}>{addon.name.en}</div>
                        <Form.Field style={{paddingBottom:15}}>
                          <div>
                            <Radio
                              style={{ fontSize: 18 }}
                              label={addon.values[0].name.en}
                              name={addon.name.en}
                              value={addon.values[0].price}
                            />
                            <p style={{ float: 'right', fontSize: 18 }}>{addon.values[0].price} IQD</p>
                          </div>
                          {
                            addon.values.map((addons) =>{

                            })
                          }
                          </Form.Field>
                        {/* <Form.Field style={{paddingBottom:15}}>
                          <div>
                            <Radio
                              style={{fontSize:18}}
                              label='Brown Rice'
                              name='radioGroup'
                              value='v2'
                            />
                            <p style={{float:'right',fontSize:'18'}}>+GBP1.00</p>
                          </div>
                        </Form.Field> */}
                    </Form.Group>
                  )
                })
                :
                null:
                null:
                null
              }
            </Form>
          </Modal.Description>
        </Modal.Content>

        <Modal.Actions style={{ background: 'transparent' }}>
          <Grid columns={2}>
            <Grid.Column width={6}>
              <div>
                <Button onClick={this.decLabel} style={{ height: 50, width: 50, borderRadius: 100, padding: 0, paddingLeft: 10 }}>
                  <Icon name='minus' />
                </Button>
                <Label style={{ background: 'transparent', fontSize: 17 }}>{this.state.amount}</Label>
                <Button onClick={this.incLabel} style={{ height: 50, width: 50, borderRadius: 100, padding: 0, paddingLeft: 10 }}>
                  <Icon name='plus' />
                </Button>
              </div>
            </Grid.Column>
            <Grid.Column width={9}>
              <Button onClick={() => this.props.addToCart(product)} fluid negative style={{ paddingBottom: 0 }} size='large'>
                <p style={{ float: 'left', paddingLeft: 100 }}>Add {this.state.amount} to Card</p>
                <p style={{ float: 'right' }}>+GBP1.00</p>
              </Button>
            </Grid.Column>
          </Grid>
        </Modal.Actions>
      </Modal>
    );
  }
}


function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload: item })
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductModal)
