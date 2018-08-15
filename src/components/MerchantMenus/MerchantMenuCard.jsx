import React, {Component} from 'react'
import { Card, Label } from 'semantic-ui-react'



const header=['PAUL (Kingsway)'].join(' ')
const description = [
  'Bakery • Sandwich • Pastry',
  'test',
].join(' ')
export default class MerchantMenuCardClass extends Component {
  render(){
    return(
      <Card style={MerchantMenuCard} fluid>
        <Card.Content style={MerchantMenuCardContentHeader} header={header} />
        <Card.Content style={MerchantMenuCardContentDescription} description={description} />
        <Card.Content>
          <Label>
            25–35 min
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
