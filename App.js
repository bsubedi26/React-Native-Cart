import React from 'react';
import { Provider } from 'react-redux';

import AppWithNavigationState from './src/navigators/AppNavigator';
import createStore from './src/util/createStore';

const { store } = createStore()
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
