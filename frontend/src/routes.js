import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const Tables = Loadable({
  loader: () => import('./views/Base/Tables'),
  loading: Loading,
});

const Colors = Loadable({
  loader: () => import('./views/Theme/Colors'),
  loading: Loading,
});

const Typography = Loadable({
  loader: () => import('./views/Theme/Typography'),
  loading: Loading,
});



// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout }
];

export default routes;