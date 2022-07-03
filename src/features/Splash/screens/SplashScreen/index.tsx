import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {ReactElement, useContext, useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';
import routes from '../../../../navigation/routes';
import {WeatherContext} from '../../../../providers/WeatherProvider';
import {SplashParamList} from '../../navigation';
import SplashScreenContainer from './ui';
import {hasLocationPermission} from '../../../../config/Permissions';
import {TPositionProps} from '../../types';
import WeatherHelper from '../../../../helpers/Weather';

export type SplashNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<SplashParamList, 'App.SplashScreen'>,
  NativeStackNavigationProp<any>
>;

interface ISplashScreen {
  navigation: SplashNavigationProp;
}

const SplashScreen: React.FC<ISplashScreen> = ({navigation}): ReactElement => {
  const {geoLocation, handleWeatherData, handleGeoLocation} =
    useContext(WeatherContext);

  const fetchLocationData = async (): Promise<void> => {
    const hasPermission = await hasLocationPermission();

    if (hasPermission) {
      Geolocation.getCurrentPosition(
        (position: TPositionProps) => {
          const {latitude, longitude} = position.coords;
          handleGeoLocation({lat: latitude, lng: longitude});
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  };

  useEffect(() => {
    fetchLocationData();
  }, []);

  const fetchWeatherByLocationData = async (): Promise<void> => {
    const weatherHelper = await new WeatherHelper(
      geoLocation,
    ).fetchWeatherData();
    handleWeatherData(weatherHelper);
    navigation.navigate(routes.App.Home.HomeScreen);
  };

  useEffect(() => {
    if (geoLocation && geoLocation.lat) {
      fetchWeatherByLocationData();
    }
  }, [geoLocation]);

  return <SplashScreenContainer />;
};

export default SplashScreen;
