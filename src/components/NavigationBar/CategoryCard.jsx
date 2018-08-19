import React, {Component} from 'react'
import {Card} from 'semantic-ui-react'
import FittedImg from 'react-fitted-img';

class CategoryCard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const category=this.props.category;
    return (
      <Card fluid="fluid" href={"../MerchantCategories/"+category.merchant_specialty_id+"/"+category.merchant_specialty_name.en}>
      <FittedImg fit="cover" alt="food" src={category.merchant_specialty_background} height="250"/>
      <Card.Content textAlign="center">
        <Card.Header center>{category.merchant_specialty_name.en}</Card.Header>
      </Card.Content>
    </Card>
  )
  }
}
export default CategoryCard
