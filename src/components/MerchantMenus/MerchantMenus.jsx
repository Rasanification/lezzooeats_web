import React from 'react'
import { Container, Grid, Header, Icon, Image,Responsive, Segment } from 'semantic-ui-react'
import MerchantMenuCard from './MerchantMenuCard';
import MerchantFoodCategories from './MerchantFoodCategories';


/////////////////          css         //////////////////
const zeropad={
  padding: 0,
  margin: 0,
};
const background_Image = {
  padding: 0,
  margin: 0,
  backgroundSize: 'cover',
  backgroundPositionY:'50%',
  height: 400,
  width: '100%',
  backgroundImage: 'url(https://duyt4h9nfnj50.cloudfront.net/resized/1531225329107-w550-65.jpg)',
};
const MerchantMenuCardColumn={
  margin:'50px',
};
//////////////////////////////////////////////////////////



const MerchantMenus = () => (
  <Container fluid style={zeropad}>
    <div style={background_Image}>
      <Grid doubling stackable columns={3}>
         <Grid.Column style={MerchantMenuCardColumn}>
            <MerchantMenuCard />
         </Grid.Column>
      </Grid>
    </div>
    <MerchantFoodCategories />
    
  </Container>
)

export default MerchantMenus
