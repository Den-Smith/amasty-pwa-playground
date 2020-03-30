import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Page from './Page';
import classes from './Main.css';

const Main = () => {
    return (
        <main className={classes.root}>
            <Switch>
                <Route path="/page/:slug">
                    <Page />
                </Route>
                <Route>Home page 322</Route>
            </Switch>
        </main>
    );
};

export default Main;
