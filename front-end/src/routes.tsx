import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login'
import LogList from './pages/LogList'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Login} path="/" exact />
            <Route component={LogList} path="/logs" exact />
        </BrowserRouter>
    );
}

export default Routes;