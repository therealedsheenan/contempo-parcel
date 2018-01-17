// @flow

import React from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';

// react containers
import Navigation from '../components/Navigation';
import LoadingComponent from '../components/Loading';

const AsyncStyleGuide = Loadable({
  loader: () => import('../containers/Styleguide'),
  loading: props => <LoadingComponent {...props} />
});

const AsyncHome = Loadable({
  loader: () => import('../containers/Home'),
  loading: props => <LoadingComponent {...props} />
});

const routes = () => (
  <main>
    <Route path="/" component={Navigation} />
    <Route exact path="/style" component={AsyncStyleGuide} />
    <Route exact path="/" component={AsyncHome} />
  </main>
);

export default routes;
