import React, {Component} from 'react'
import { Container, Grid } from 'semantic-ui-react'
import MerchantMenuCard from './MerchantMenuCard';
import MerchantProductCategories from './MerchantProductCategories';
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
      console.log(result.data[0]);
      this.setState({ merchantBackground: result.data[0].merchant_image });
      this.setState({ currentMerchant: result.data});
    }).catch((error) => {

    })
  }
  render(){
    var background_Image = {
      padding: 0,
      margin: 0,
      backgroundSize: 'cover',
      backgroundPositionY:'50%',
      height: 400,
      width: '100%',
      backgroundImage: 'url('+this.state.merchantBackground+')'
    };

    return(
    <Container fluid style={zeropad}>
        <div style={background_Image}>
          <Grid doubling stackable columns={3}>
            <Grid.Column style={MerchantMenuCardColumn}>
            {
              this.state.currentMerchant.map((merchant) =>{
                return(
                  <MerchantMenuCard  merchant={merchant}/>
                )
              })
            }
            </Grid.Column>
          </Grid>
        </div>
      <MerchantProductCategories merchantCategories={this.state.merchantCategories} merchantProducts={this.state.merchantProducts} sections={this.state.sections}/>
    </Container>
  )
}

}

const zeropad={
  padding: 0,
  margin: 0,
};

const MerchantMenuCardColumn={
  margin:'50px',
};

export default MerchantMenus
