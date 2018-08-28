import React, {Component} from 'react'
import { Card, Button, } from 'semantic-ui-react'

export default class CheckoutCard extends Component {
  render() {


    return (
      <div style={{fontSize:18}}>
        <Card.Group>
          <Card stackable fluid>
            <Card.Content>
              <Card.Header>1. Register or Log In</Card.Header>
            </Card.Content>
            <Card.Content>
              <Card.Description style={{paddingRight:50,fontSize:17}}>New to Uber? Registration only takes a minute. If you already use Uber, please log in to your account.</Card.Description>
              <Card.Description style={{paddingTop:20}}>
                <div>
                  <Button>Log In</Button>
                  <Button primary>Register</Button>
                </div>
              </Card.Description>
            </Card.Content>
          </Card>
          <Card fluid meta='2. Delivery Time' />
          <Card fluid meta='3. Confirm Location' />
          <Card fluid meta='4. Payment' />
        </Card.Group>
      </div>
    )
  }
}
