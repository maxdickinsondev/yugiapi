import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Details from './pages/details';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/"  exact component={Main} />
                <Route path="/details/:detail" component={Details} />
            </Switch>
        </BrowserRouter>
    )
}