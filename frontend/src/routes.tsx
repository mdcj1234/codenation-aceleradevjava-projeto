import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import LogList from './pages/LogList';
import NewUser from './pages/NewUser';
import LodDetail from './pages/LogDetail'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Login} path="/" exact />
            <Route component={LogList} path="/logs" exact />
            <Route component={LodDetail} path="/logs/detail" exact />
            <Route component={NewUser} path="/new-user" exact />
        </BrowserRouter>
    );
}

export default Routes;