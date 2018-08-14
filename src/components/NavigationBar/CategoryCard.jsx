import React, {Component} from 'react'
import {Card, Icon, Image} from 'semantic-ui-react'

class CategoryCard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const category=this.props.category;
    return (
      <Card fluid="fluid">
      <Image src={category.merchant_specialty_background} />
      <Card.Content textAlign="center">
        <Card.Header center>{category.merchant_specialty_name.en}</Card.Header>
      </Card.Content>

    </Card>
  )
  }
}
export default CategoryCard
