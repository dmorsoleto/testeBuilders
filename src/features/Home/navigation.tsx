import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';

export const HOME_ROUTES = {
  itself: 'App.Home',
  HomeScreen: 'App.HomeScreen',
} as const;

export type HomeParamList = {
  [HOME_ROUTES.itself]: undefined;
  [HOME_ROUTES.HomeScreen]: undefined;
};

const {Navigator: HomeNavigator, Screen} =
  createStackNavigator<HomeParamList>();

const screenOptions: StackNavigationOptions = {headerShown: false};

export function HomeNavigatorStack(): React.ReactElement {
  return (
    <HomeNavigator
      screenOptions={screenOptions}
      initialRouteName={HOME_ROUTES.HomeScreen}>
      <Screen name={HOME_ROUTES.HomeScreen} component={HomeScreen} />
    </HomeNavigator>
  );
}
