import React, {Component} from 'react'
import { Grid, Card, Image } from 'semantic-ui-react'
import ProductModal from './ProductModal';
import FittedImg from 'react-fitted-img';

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const product =this.props.product;

    return (
      <Card fluid>
        <Grid stackable fluid style={{background:'white',padding:4,margin:0,}}>
          <Grid.Column  width={10}>
            <Card.Content>
              <Card.Header style={{fontSize:22,}}> {product ? product.product_name.en : null}</Card.Header>
              <Card.Meta >
                <p style={{overflow: 'hidden',whiteSpace: 'nowrap',textOverflow: 'ellipsis',marginTop:8,marginBottom:20,}}>
                {product? product.product_description.en : null}
                </p>
              </Card.Meta>
              <Card.Description>{product ? product.product_price : null} IQD</Card.Description>
            </Card.Content>

          </Grid.Column>
          <Grid.Column width={6} style={{padding:0,margin:0,}}>
            <FittedImg fit="cover" alt="food" src={product ? product.product_image : null} height="150" style={{padding:0,margin:0,}}/>
          </Grid.Column>
        </Grid>
        <ProductModal product={product}/>
      </Card>
    )
  }
}
