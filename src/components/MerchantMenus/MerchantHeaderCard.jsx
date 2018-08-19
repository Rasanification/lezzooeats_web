import React, {Component} from 'react'
import { Card, Label } from 'semantic-ui-react'

export default class MerchantHeaderCard extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    var merchant=this.props.merchant
    return(
      <Card style={MerchantMenuCard} fluid>
        <Card.Content style={MerchantMenuCardContentHeader} header={merchant ? merchant.merchant_name.en : null} />
        <Card.Content style={MerchantMenuCardContentDescription} description={merchant ? merchant.merchant_name.en : null} />
        <Card.Content>
          <Label>
            {merchant ? merchant.merchant_delivery_time : null} min
          </Label>
        </Card.Content>
      </Card>
    )
  }
}
const MerchantMenuCard={
  padding: 30,
};
const MerchantMenuCardContentDescription={
  border: 'none',
  // padding: '20px',
};
const MerchantMenuCardContentHeader={
  fontSize: 25,
};
