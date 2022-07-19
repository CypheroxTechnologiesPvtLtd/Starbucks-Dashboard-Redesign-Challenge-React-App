import React from 'react'
import { Route, Switch } from "react-router-dom";

import Home from '../pages/Home/home'
import Analytics from '../pages/Analytics/Analytics';
import Products from '../pages/Products/Products';
import Employees from '../pages/Employees/Employees';
import Orders from '../pages/Orders/orders';


const Routes1 = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/analytics' component={Analytics} />
            <Route path='/products' component={Products} />
            <Route path='/employees' component={Employees} />
            <Route path='/orders' component={Orders} />
        </Switch>

    )
}

export default Routes1;