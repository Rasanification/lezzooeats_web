import React from 'react';
import axios from 'axios';

export default class MerchantList extends React.Component{
  state = {
    merchants: [],
  };


componentDidMount(){
  axios.get('http://api3.lezzooeats.com/app/merchants').then(res=>{
    console.log(res);
    this.setState({merchants: res.data});
  });
}

render(){
    return(<ul>{this.state.merchants.map(merchant => <li>{merchant.merchant_name.en}</li>)}</ul>) ;
}
}
