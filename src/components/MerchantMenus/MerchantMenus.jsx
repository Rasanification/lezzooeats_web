import React from 'react'
import { Container, Grid, Header, Icon, Image, Segment } from 'semantic-ui-react'
import MerchantMenuCard from './MerchantMenuCard';
import './MerchantMenus.css';

const MerchantMenus = () => (
  <Container fluid className="zeropad">
    <div className="zeropad background_Image" style={{ backgroundImage: "url(https://duyt4h9nfnj50.cloudfront.net/resized/1531225329107-w550-65.jpg)" }}>
    <Grid doubling stackable columns={3}>
       <Grid.Column className="MerchantMenuCardColumn">
          <MerchantMenuCard />
       </Grid.Column>
    </Grid>
    </div>
  </Container>
)

export default MerchantMenus
