import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

export default function Routes() {

    return (
        <div className='content-wrapper'>
            <Switch>
                <Route path='/' component={Dashboard} exact />
                <Redirect from='*' to='/' />
            </Switch>
        </div>
    )
}