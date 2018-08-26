import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Merchants from './components/Merchants/Merchants';
import MerchantMenus from './components/MerchantMenus/MerchantMenus';
import SelectedCategories from './components/MerchantCategories/SelectedCategories'
import Checkout from './components/Checkout/Checkout'

const Router = () => (
    <Switch>
        <Route exact path="/Merchants" component={Merchants} />
        <Route path="/MerchantMenus/:id" component={MerchantMenus} />
        <Route path="/MerchantCategories/:id/:name" component={SelectedCategories} />
        <Route path="/Checkout" component={Checkout} />    
    </Switch>
)

export default Router