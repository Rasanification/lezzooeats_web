import React from 'react'
import { Grid, Card, Icon, Image } from 'semantic-ui-react'

const CardExampleImageCard = () => (
  <Card>
    <Grid>
      <Grid.Column width={8}>
        <Card.Content>
          <Card.Header>Daniel</Card.Header>
          <Card.Meta>Joined in 2016</Card.Meta>
          <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            10 Friends
          </a>
        </Card.Content>
      </Grid.Column>
      <Grid.Column width={8}>
        <Image src='https://uk-homedelivery-prod-images.s3.amazonaws.com/UE-mobile_uk_9Nuggets.png' />
      </Grid.Column>
    </Grid>
  </Card>

)

export default CardExampleImageCard
