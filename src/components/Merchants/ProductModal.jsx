import _ from 'lodash'
import FittedImg from 'react-fitted-img';
import React from 'react'
import { Button, Header, Icon, Image, Modal, Form, Radio, Checkbox, Input } from 'semantic-ui-react'

const ProductModal = () => (
  <Modal size='small' trigger={<Button>Order</Button>} style={{maxHeight:600,height:600,margin:0,padding:0}}>
    <Modal.Content scrolling style={{maxHeight:600,height:600,margin:0,padding:0}}>
      <div style={{height:350,width:'100%',margin:0,padding:0,backgroundSize:'cover',backgroundPositionY:'50%',backgroundImage: 'url(https://duyt4h9nfnj50.cloudfront.net/sku/29de2d243e25d5f816fa181923204170)',}}>

      </div>
      <Modal.Description style={{margin:50}}>
        <Header style={{fontSize:38}}>Manager Special Meal</Header>
        <p style={{fontSize:16,color:'gray',padding:4}}>Two pieces chicken, two spicy wings, regular fries, can of drink, and one coleslaw.</p>

        <Form style={{margin:5,marginTop:40}}>
          <Form.Group grouped>
            <div style={{fontSize:18}}>Add Extra Rice(Choose between 0 and 1)</div>
            <Form.Field style={{fontSize:18}}>
              <div>
                <Radio
                  style={{fontSize:18}}
                  label='White Rice'
                  name='radioGroup'
                  value='v1'
                />
                <p style={{float:'right'}}>+GBP1.00</p>
              </div>
            </Form.Field>
            <Form.Field>
              <div>
                <Radio
                  label='Brown Rice'
                  name='radioGroup'
                  value='v2'
                />
                <p style={{float:'right'}}>+GBP1.00</p>
              </div>
            </Form.Field>
          </Form.Group>
          <Form.Group grouped>
            <label>Add Extras(Choose between 0 and 5)</label>
            <Form.Field>
              <div>
                <Checkbox label='Soya Sauce' />
                <p style={{float:'right'}}>+GBP1.00</p>
              </div>
            </Form.Field>
            <Form.Field>
              <Checkbox label='Wasabi' />
            </Form.Field>
            <Form.Field>
              <Checkbox label='Spicy Sauce' />
            </Form.Field>
            <Form.Field>
              <Checkbox label='Ginger' />
            </Form.Field>
            <Form.Field>
              <Checkbox label='Spicy Teriyaki Sauce' />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label>Special instructions</label>
          </Form.Field>
          <Form.Field>
            <Input fluid placeholder='Add note (extra sauce, no onions etc.)' />
          </Form.Field>
        </Form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ProductModal
