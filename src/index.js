import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';



import store from './redux/store';
import AuthOrApp from './AuthOrApp';

  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <AuthOrApp />
      </React.StrictMode>
    </Provider>,
    document.getElementById('root')
  );