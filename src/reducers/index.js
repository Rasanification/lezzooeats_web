import { combineReducers } from 'redux'

import cartReducer from './ProductModalReducer'

export default combineReducers({
  cart: cartReducer
})
