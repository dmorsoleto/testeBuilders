import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import WeatherProvider from './src/providers/WeatherProvider';

function AppRoot() {
  return (
    <WeatherProvider>
      <App />
    </WeatherProvider>
  );
}

AppRegistry.registerComponent(appName, () => AppRoot);
