import React, {Component} from 'react'
import { Container, Grid } from 'semantic-ui-react'
import MerchantHeaderCard from './MerchantHeaderCard';
import MerchantProducts from './MerchantProducts';
import { getMerchantCategories, getMerchantProducts,getSingleMerchant } from '../fetch/Merchants';

class MerchantMenus extends Component{
  constructor(props){
    super(props);
    this.state = { currentMerchant:[], merchantCategories: [], merchantProducts: [], sections: [], merchantBackground:"" };
  }
  componentDidMount() {
    getMerchantCategories(this.props.match.params.id).then((result) => {
      this.setState({ merchantCategories: result.data });
      let sections = [];
      result.data.map((category) => {
        sections.push("section-" + category.product_category_id);
      })
      this.setState({ sections });

    }).catch((error) => {
    })
    getMerchantProducts(this.props.match.params.id).then((result) => {
      this.setState({ merchantProducts: result.data });
    }).catch((error) => {
    })
    getSingleMerchant(this.props.match.params.id).then((result) => {
      this.setState({ merchantBackground: result.data[0].merchant_image });
      this.setState({ currentMerchant: result.data});
    }).catch((error) => {
    })
  }
  render(){
    const background_Image = {
      padding: 0,
      margin: 0,
      backgroundSize: 'cover',
      backgroundPositionY:'50%',
      height: 400,
      width: '100%',
      backgroundImage: 'url('+this.state.merchantBackground+')'
    };

    return(
    <Container fluid style={{padding:0,margin:0}}>
      <div style={background_Image}>
        <Grid doubling stackable columns={3}>
          <Grid.Column style={{margin:'50px'}}>
            {
              this.state.currentMerchant.map((merchant) =>{
                return(
                  <MerchantHeaderCard  merchant={merchant}/>
                )
              })
            }
          </Grid.Column>
        </Grid>
      </div>
      <MerchantProducts merchantCategories={this.state.merchantCategories} merchantProducts={this.state.merchantProducts} sections={this.state.sections}/>
    </Container>
  )
}

}


export default MerchantMenus
