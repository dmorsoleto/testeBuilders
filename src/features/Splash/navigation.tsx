import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';

export const SPLASH_ROUTES = {
  itself: 'App.Splash',
  SplashScreen: 'App.SplashScreen',
} as const;

export type SplashParamList = {
  [SPLASH_ROUTES.itself]: undefined;
  [SPLASH_ROUTES.SplashScreen]: undefined;
};

const {Navigator: SplashNavigator, Screen} =
  createStackNavigator<SplashParamList>();

const screenOptions: StackNavigationOptions = {headerShown: false};

export function SplashNavigatorStack(): React.ReactElement {
  return (
    <SplashNavigator
      screenOptions={screenOptions}
      initialRouteName={SPLASH_ROUTES.SplashScreen}>
      <Screen name={SPLASH_ROUTES.SplashScreen} component={SplashScreen} />
    </SplashNavigator>
  );
}
