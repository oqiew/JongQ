import React, { Component } from 'react'

import { AppRegistry, LogBox } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import App from './App';
LogBox.ignoreLogs([
    'Warning:', 'Setting', 'Possible', 'Require cycle', 'Setting a timer', 'Remote'
]);
class ReduxApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }

}
AppRegistry.registerComponent(appName, () => ReduxApp);