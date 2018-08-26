import React from 'react'
import ProductModal from './ProductModal'
import {connect} from 'react-redux'

function productModal(props){
  return
        <ProductModal
          addToCart={props.addToCart}
        />
}

function mapStateToProps(state) {
  return {
    cart: state.cart//now we have props.cart
  }
}

function mapDispatchToProps(dispatch){

  return {
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload:item})
    },
    removeFromCart: (item) =>{
      dispatch({type: 'REMOVE', payload:item})
    }
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(ProductModal)
