import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CategoryCard = () => (
  <Card fluid>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
    <Card.Content textAlign='center'>
      <Card.Header>Category Name</Card.Header>
    </Card.Content>
  </Card>
);
// this is comment
export default CategoryCard
