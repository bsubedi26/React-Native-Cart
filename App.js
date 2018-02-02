import React from 'react';
import { Provider } from 'react-redux';
import { Font, AppLoading } from 'expo';
import AppWithNavigationState from 'src/navigators/AppNavigator';
import createStore from 'src/util/createStore';

const store = createStore();

export default class App extends React.Component {
  state = {
    ready: false
  }

  async loadAssets() {
    await Font.loadAsync('Baskerville', require('./src/assets/fonts/LibreBaskerville.ttf'))
    this.setState({ ready: true })
  }

  componentDidMount() {
    this.loadAssets()
  }

  render() {
    if (!this.state.ready) {
      return (<AppLoading />)
    }
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

