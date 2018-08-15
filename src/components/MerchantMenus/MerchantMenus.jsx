import React, {Component} from 'react'
import { Container, Grid } from 'semantic-ui-react'
import MerchantMenuCard from './MerchantMenuCard';
import MerchantProductCategories from './MerchantProductCategories';
class MerchantMenus extends Component{
  constructor(props){
    super(props);
    this.state = {merchants:[]};
  }

  render(){
  return(
    <Container fluid style={zeropad}>
    <div style={background_Image}>
      <Grid doubling stackable columns={3}>
         <Grid.Column style={MerchantMenuCardColumn}>
            <MerchantMenuCard currentMerchant={this.props.match.params.id} />
         </Grid.Column>
      </Grid>
    </div>
    <MerchantProductCategories currentMerchant={this.props.match.params.id} />

  </Container>
  )
}
}
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

export default MerchantMenus
