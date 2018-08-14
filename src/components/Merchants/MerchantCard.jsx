import React, {Component} from 'react'
import {Card, Icon, Image, Grid, Label} from 'semantic-ui-react'
import FittedImg from 'react-fitted-img';

class MerchantCard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const merchant=this.props.merchant
    return (
    <Card fluid="fluid" href={"../MerchantMenus/"+merchant.merchant_id}>
      <FittedImg fit="cover" alt="food" src={merchant.merchant_image} height="300"/>
      <Card.Content>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Card.Header>
                <h2>{merchant.merchant_name.en}</h2>
              </Card.Header>
            </Grid.Column>
            <Grid.Column>
              <Image src={merchant.merchant_logo}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Card.Description >
                <Label style={{background:'#f5f5f5',fontSize:15}}>{merchant.merchant_open_time} - {merchant.merchant_close_time}</Label>
                <Label style={{background:'#f5f5f5',fontSize:15}}>This is Test</Label>
              </Card.Description>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    </Card>)
  }
}
export default MerchantCard
