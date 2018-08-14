import React, {Component} from 'react'
import { Grid, Card, Image } from 'semantic-ui-react'

export default class CardExampleImageCard extends Component {
  render() {
    const zeropad={
      padding:0,
      margin:0,
    };
    const styleProductCardContent={
      background:'white',
      padding:4,
      margin:0,
    };
    const styleProductCardHeader={
      fontSize:22,
    };
    const styleProductCardMeta={
      // lineHeight: '1.5em',
      // height: '3em',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',

      marginTop:8,
      marginBottom:20,
    };
    return (
      <Card fluid>
        <Grid style={styleProductCardContent}>
          <Grid.Column  width={11}>
            <Card.Content>
              <Card.Header style={styleProductCardHeader}>9 Chicken McNuggets®</Card.Header>
              <Card.Meta >
                <p style={styleProductCardMeta}>
                  For nutritional and allergen information for our food please visit http://mcdonalds.co.uk/nutrition. Beverages affected by the Governments Soft Drinks Industry Levy are subject to an additional charge which is included in the price shown.
                </p>
              </Card.Meta>
              <Card.Description>GBP3.49</Card.Description>
            </Card.Content>

          </Grid.Column>
          <Grid.Column width={5} style={zeropad}>
            <Image style={zeropad} src='https://uk-homedelivery-prod-images.s3.amazonaws.com/UE-mobile_uk_9Nuggets.png' />
          </Grid.Column>
        </Grid>
      </Card>

    )
  }
}
