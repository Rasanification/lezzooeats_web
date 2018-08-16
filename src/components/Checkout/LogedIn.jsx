import React, {Component} from 'react'
import { Card, Icon, Button, Dropdown, Grid, Input, Label, } from 'semantic-ui-react'

export default class CheckoutCard extends Component {
  render() {
    const options = [
      { key: 1, text: 'Cash', value: 1 },
      { key: 2, text: 'Fast Pay', value: 2 },
    ]

    return (
      <div style={{fontSize:18}}>
        <Card.Group>
          <Card stackable fluid>
            <Card.Content>
              <Card.Header>1. Delivery Time</Card.Header>
            </Card.Content>
            <Card.Content>
              <Card.Description style={{paddingRight:50,fontSize:17}}>
                <div>
                  <Icon name='clock outline' style={{fontSize:14,paddingRight:5,color:'#c7c3c3'}}/>
                  As soon as possible
                  <Label style={{background:'#262626',color:'white',borderRadius:100, paddingLeft:10,marginLeft:10}}>15–25 min</Label>
                </div>
              </Card.Description>
            </Card.Content>
          </Card>
          <Card stackable fluid>
            <Card.Content>
              <Card.Header>2. Confirm Location</Card.Header>
            </Card.Content>
            <Card.Content>
              <Card.Description style={{paddingRight:50,fontSize:17}}>
                <div style={{
                  padding: 0,
                  margin: 0,
                  backgroundSize: 'cover',
                  backgroundPositionY:'50%',
                  height: 400,
                  width: '100%',
                  backgroundImage: 'url(http://www.headwaydevon.org.uk/wp-content/uploads/2014/01/gmap.jpg)'
                }}>

                </div>
                <Grid columns={2} style={{marginTop:10}}>
                  <Grid.Column width={8}>
                    <label>lat</label>
                    <Input fluid value="Norway" readOnly style={{background:'#f1f1f1'}}/>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <label>lng</label>
                    <Input fluid value="Norway" readOnly style={{background:'#f1f1f1'}}/>
                  </Grid.Column>
                </Grid>

              </Card.Description>
            </Card.Content>
          </Card>
          <Card stackable fluid>
            <Card.Content>
              <Card.Header>3. Payment</Card.Header>
            </Card.Content>
            <Card.Content>
              <Card.Description>
                <Grid stackable fluid>
                  <Grid.Row columns={2} style={{margin:0, padding:0}}>
                    <Grid.Column width={8}>
                      <Dropdown fluid selection options={options} defaultValue={options[0].value}/>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row columns={2} style={{marginTop:10,marginBottom:10, padding:0}}>
                    <Grid.Column width={8}>
                      <Input fluid placeholder='Enter promo code ' />
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <Button positive fluid style={{fontSize:18}}> Apply</Button>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row columns={2} style={{margin:0, padding:0}}>
                    <Grid.Column width={8}>
                      <Button style={{color:'green', background:'transparent'}}>Add promo code</Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    )
  }
}
