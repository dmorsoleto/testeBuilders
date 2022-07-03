import React from 'react';

import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashNavigatorStack} from '../features/Splash/navigation';
import {HomeNavigatorStack} from '../features/Home/navigation';
// import routes from './routes';

const Stack = createStackNavigator();

export default () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name={'App.SplashScreen'}
          component={SplashNavigatorStack}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={'App.HomeScreen'}
          component={HomeNavigatorStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
