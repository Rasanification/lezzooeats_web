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

      <Card fluid="fluid" style={{boxShadow: '0px 3px 10px #cecece',}}>
        <Card.Content>
          <Grid columns={2}>
            <Grid.Column width={10}>
              <Card.Header style={{fontSize:18,}}> {product ? product.product_name.en : null}</Card.Header>
              <Card.Meta >
                <p style={{overflow: 'hidden',whiteSpace: 'nowrap',textOverflow: 'ellipsis',marginTop:8,marginBottom:20,}}>
                {product? product.product_description.en : null}
                </p>
              </Card.Meta>
              <Card.Description>{product ? product.product_price : null} IQD</Card.Description>
            </Grid.Column>
            <Grid.Column style={{backgroundSize:'cover',backgroundImage:`url(${product ? product.product_image : null})`}} width={6}>

            </Grid.Column>
          </Grid>
        </Card.Content>
        <ProductModal product={product}/>
      </Card>
    )
  }
}
