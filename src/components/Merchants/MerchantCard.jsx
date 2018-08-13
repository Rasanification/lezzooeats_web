import React, {Component} from 'react'
import {Card, Icon, Image} from 'semantic-ui-react'

class MerchantCard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const merchant=this.props.merchant
    return (<Card fluid="fluid">
      <Image src={merchant.merchant_image}>
      <Image src={merchant.merchant_logo} size="mini"/>
      </Image>
      <Card.Content>
        <Card.Header center>{merchant.merchant_name.en}</Card.Header>
        <Card.Description>{merchant.merchant_area.en}</Card.Description>
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>)
  }
}
export default MerchantCard
