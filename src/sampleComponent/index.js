import React from 'react';
import {Provider} from 'react-redux';
import App from './containers/App';
import configureStore from './store';

export default function getView() {
  return (
    <Provider store={configureStore()}>
      <App/>
    </Provider>
  )
}
