import React, { Component } from 'react';

export default class Categories  extends Component {


  render() {
    let isShown=this.props.isShown;

    var divStyle = {
      display: 'none'
    };

    if(isShown=='true'){
      divStyle = {
        display: 'block'
      };
    }

    return (
      <div style={divStyle}>Hello World </div>
    )
  }
}
