import _ from 'lodash'
import FittedImg from 'react-fitted-img';
import React, { Component } from 'react';
import { Button, Header, Icon, Image, Modal, Form, Radio, Checkbox, Input, Grid, Label } from 'semantic-ui-react'

class ProductModal extends Component {
  constructor(props){
    super(props);
    this.state={amount:1,open: false};
    this.incLabel = this.incLabel.bind(this);
    this.decLabel = this.decLabel.bind(this);
  }
  incLabel(){
    // const newLabel = this.state.amount == 1 ? 2 : 3;
    this.setState({ amount: this.state.amount + 1 });
  }
  decLabel(){
    if(this.state.amount>1){
      this.setState({ amount: this.state.amount - 1 });
    }
  }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render(){

    const { open, dimmer } = this.state

    return(
      <Modal
        dimmer={dimmer} open={open} onClose={this.close}
        size='small'
        trigger={<Button onClick={this.show(true)} >Order</Button>}
        style={{margin:0,padding:0}}
        >
        <Modal.Content scrolling style={{maxHeight:500,height:500,margin:0,padding:0}}>
          <div style={{height:350,width:'100%',margin:0,padding:0,backgroundSize:'cover',backgroundPositionY:'50%',backgroundImage: 'url(https://duyt4h9nfnj50.cloudfront.net/sku/29de2d243e25d5f816fa181923204170)',}}>
            <Button onClick={this.close} style={{height:50,width:50,borderRadius:100,padding:0,paddingLeft:10,background:'transparent',float:'right',margin:20,color:'white'}}>
              <Icon name='close'/>
            </Button>
          </div>
          <Modal.Description style={{margin:50}}>
            <Header style={{fontSize:38}}>Manager Special Meal</Header>
            <p style={{fontSize:16,color:'gray',padding:4}}>Two pieces chicken, two spicy wings, regular fries, can of drink, and one coleslaw.</p>

            <Form style={{margin:5,marginTop:40}}>
              <Form.Group grouped>
                <div style={{fontSize:20,paddingBottom:15}}>Add Extra Rice(Choose between 0 and 1)</div>
                <Form.Field style={{paddingBottom:15}}>
                  <div>
                    <Radio
                      style={{fontSize:18}}
                      label='White Rice'
                      name='radioGroup'
                      value='v1'
                    />
                    <p style={{float:'right',fontSize:18}}>+GBP1.00</p>
                  </div>
                </Form.Field>
                <Form.Field style={{paddingBottom:15}}>
                  <div>
                    <Radio
                      style={{fontSize:18}}
                      label='Brown Rice'
                      name='radioGroup'
                      value='v2'
                    />
                    <p style={{float:'right',fontSize:'18'}}>+GBP1.00</p>
                  </div>
                </Form.Field>
              </Form.Group>
              <Form.Group grouped>
                <div style={{fontSize:20,paddingBottom:15}}>Add Extras(Choose between 0 and 5)</div>
                <Form.Field style={{paddingBottom:15}}>
                  <div>
                    <Checkbox label='Soya Sauce' style={{fontSize:18}}/>
                    <p style={{float:'right',fontSize:18}}>+GBP1.00</p>
                  </div>
                </Form.Field>
                <Form.Field style={{paddingBottom:15}}>
                  <Checkbox label='Wasabi' style={{fontSize:18}}/>
                </Form.Field>
                <Form.Field style={{paddingBottom:15}}>
                  <Checkbox label='Spicy Sauce' style={{fontSize:18}}/>
                </Form.Field>
                <Form.Field style={{paddingBottom:15}}>
                  <Checkbox label='Ginger' style={{fontSize:18}}/>
                </Form.Field>
                <Form.Field style={{paddingBottom:15}}>
                  <Checkbox label='Spicy Teriyaki Sauce' style={{fontSize:18}}/>
                </Form.Field>
              </Form.Group>
              <Form.Field>
                <div style={{fontSize:20}}>Special instructions</div>
              </Form.Field>
              <Form.Field>
                <Input fluid placeholder='Add note (extra sauce, no onions etc.)' />
              </Form.Field>
            </Form>
          </Modal.Description>
        </Modal.Content>

        <Modal.Actions style={{background:'transparent'}}>
          <Grid columns={2}>
            <Grid.Column width={6}>
            <div>
              <Button onClick={this.decLabel} style={{height:50,width:50,borderRadius:100,padding:0,paddingLeft:10}}>
                <Icon name='minus'/>
              </Button>
              <Label style={{background:'transparent',fontSize:17}}>{this.state.amount}</Label>
              <Button onClick={this.incLabel} style={{height:50,width:50,borderRadius:100,padding:0,paddingLeft:10}}>
                <Icon name='plus' />
              </Button>
            </div>
            </Grid.Column>
            <Grid.Column width={9}>
              <Button fluid negative style={{paddingBottom:0}}  size='large'>
                <p style={{float:'left',paddingLeft:100}}>Add {this.state.amount} to Card</p>
                <p style={{float:'right'}}>+GBP1.00</p>
              </Button>
            </Grid.Column>
          </Grid>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ProductModal
