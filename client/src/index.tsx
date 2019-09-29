import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import './styles/global.scss';
import 'animate.css/animate.min.css';

const Root = () => (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(
  <Provider store={store as any}>
    <Root />
  </Provider>,
  document.getElementById('root')
);

// store as any in Provider because of the redux version (in the Kodilla scripts the recommended version is 4.0.1 so is the one in the project. Decided to fix it that way instead of updating)
