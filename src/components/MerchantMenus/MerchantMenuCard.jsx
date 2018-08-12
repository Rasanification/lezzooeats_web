import React from 'react'
import { Card, Label } from 'semantic-ui-react'
import './MerchantMenuCard.css';

const description = [
  '£ • Bakery • Sandwich • Pastry',
  'test',
].join(' ')
const CardExampleExtraContent = () => (
  <Card className="MerchantMenuCard">
    <Card.Content className="MerchantMenuCardContent" header='PAUL (Kingsway)' />
    <Card.Content description={description} />
    <Card.Content>
      <Label>
        25–35 min
      </Label>
    </Card.Content>
  </Card>
)
// this is comment
export default CardExampleExtraContent
