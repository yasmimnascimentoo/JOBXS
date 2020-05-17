import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/index';
import Curriculum from './Curriculum';
import Sobre from './pages/Sobre/index';
import Contact from './pages/Contact/index';


export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/curriculum" component={Curriculum}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/sobre" component={Sobre}/>
            </Switch>
        </BrowserRouter>
    );
}