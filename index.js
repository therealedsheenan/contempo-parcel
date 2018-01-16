import React from 'react';
import ReactDOM from 'react-dom';

// main scss file
import './styles/main.scss';

const App = () => (
  <div className="App">
    <h1 className="App-Title">Hello Contempo-parcel</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
