import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// components
import App from './App';

// main scss file
import './src/styles/main.scss';

const $root = document.getElementById('root');

// development setup with HMR
const render = Component => {
  ReactDOM.render(
    <BrowserRouter>
      <Component />
    </BrowserRouter>,
    $root
  );
};

// run the app
render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.dispose(function () {
    // module is about to be replaced
    render(App);
  });

  module.hot.accept(function () {
    // module or one of its dependencies was just updated
    render(App);
  });
}
