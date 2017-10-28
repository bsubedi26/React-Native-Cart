import React from 'react';
import { Provider, inject, observer } from 'mobx-react';
import { Font, AppLoading } from 'expo';
import AppWithNavigationState from './src/navigators/AppNavigator';
import store from './src/store';


export default class App extends React.Component {
  state = {
    ready: false
  }

  async loadAssets() {
    await Font.loadAsync('Baskerville', require('./src/assets/fonts/LibreBaskerville.ttf'))
    this.setState({ ready: true })
  }

  componentDidMount () {
    this.loadAssets()
  }
  
  render() {
    if (!this.state.ready) {
      return (<AppLoading />)
    }
    return (
      <Provider {...store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
