import React from 'react';
import { Provider } from 'react-redux';

// change routes to split or server
import routes from './src/config/routes';
import store from './src/config/store';

export default () => (
  <Provider store={store}>
    <div className="App">
      {routes()}
    </div>
  </Provider>
);

