import React, {Component} from 'react'
import { Grid, Card, Image } from 'semantic-ui-react'

export default class CardExampleImageCard extends Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    const product =this.props.product;

    return (
      <Card stackable fluid>
        <Grid style={styleProductCardContent}>
          <Grid.Column  width={9}>
            <Card.Content>
              <Card.Header style={styleProductCardHeader}>{product? product.product_name.en : null}</Card.Header>
              <Card.Meta >
                <p style={styleProductCardMeta}>
                {product? product.product_description.en : null}
                </p>
              </Card.Meta>
              <Card.Description>{product.product_price} IQD</Card.Description>
            </Card.Content>

          </Grid.Column>
          <Grid.Column width={7} style={zeropad}>
            <Image style={zeropad} src={product.product_image} />
          </Grid.Column>
        </Grid>
      </Card>

    )
  }
}
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