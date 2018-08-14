import React, {Component} from 'react'
import {Card, Icon, Image, Grid} from 'semantic-ui-react'
import FittedImg from 'react-fitted-img';

  const merchantCardStyle={

  }
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
      <Grid Column={2}>
        <Grid.Row>
          <Grid.Column>
            <h1>{merchant.merchant_name.en}</h1>
          </Grid.Column>
          <Grid.Column>
            <Image src={merchant.merchant_logo}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Card.Description>{merchant.merchant_open_time} - {merchant.merchant_close_time}</Card.Description>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>)
  }
}
export default MerchantCard
