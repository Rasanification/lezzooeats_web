import React, {Component} from 'react'
import {Card, Icon, Image, Grid, Label} from 'semantic-ui-react'
import FittedImg from 'react-fitted-img';
const merchantCardStyle={
  // background:'pink',
  color: 'black',
  boxShadow: "0px 3px 10px #efefef",
  // width:400,
  // height:300,
};
class MerchantCard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const merchant=this.props.merchant
    return (
    <Card fluid="fluid" href={"../MerchantMenus/"+merchant.merchant_id} style={merchantCardStyle}>
      <FittedImg fit="cover" alt="food" src={merchant.merchant_image} height="220"/>
      <Card.Content>
        <Grid>
          <Grid.Row style={{margin:0,padding:5,paddingBottom:0}}>
            <Grid.Column width={4}>
              <FittedImg fit="cover" alt="food" src={merchant.merchant_logo} height="50" style={{borderRadius:100,}}/>
            </Grid.Column>
            <Grid.Column width={12}>
              <Card.Header style={{margin:0,padding:0}}>
                <p style={{fontSize:18,margin:0,padding:0}}>{merchant.merchant_name.en}</p>
                <p style={{fontSize:14,margin:0,padding:0}}>£ • Vegetarian friendly • Sandwich • Pastry</p>
              {/*<p style={{fontSize:10,margin:0}}>( {merchant.merchant_open_time} - {merchant.merchant_close_time} )</p>*/}
              </Card.Header>
            </Grid.Column>
          </Grid.Row>
        <Grid.Row style={{margin:0,padding:5}}>
            <Grid.Column>
              <Card.Description >
                <Label style={{background:'#f5f5f5',fontSize:13}}> {merchant.merchant_open_time} - {merchant.merchant_close_time} </Label>
                <Label style={{background:'#f5f5f5',fontSize:13}}> 30-45 min</Label>
              </Card.Description>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    </Card>)
  }
}
export default MerchantCard
