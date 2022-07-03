/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashNavigatorStack} from '../features/Splash/navigation';
import {HomeNavigatorStack} from '../features/Home/navigation';
import routes from './routes';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name={routes.App.Splash.SplashScreen}
          component={SplashNavigatorStack}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={routes.App.Home.HomeScreen}
          component={HomeNavigatorStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
