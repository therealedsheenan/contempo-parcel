import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

// components
// import App from './App';

// main scss file
import './styles/main.scss';

const $root = document.getElementById('root');

// if (process.env.NODE_ENV === 'production') {
//   // production setup
//   ReactDOM.render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>,
//     $root
//   );
// }

const App = () => {
  return (
    <div>this is a test.</div>
  )
};

// development setup with HMR
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    $root
  );
};

render(App);

// Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('./App', () => {
//     render(App);
//   });
// }
