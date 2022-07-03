/**
 * @format
 */

import 'react-native';
import React from 'react';
import Home from '../src/features/Home/screens/HomeScreen/index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {WeatherContext} from '../src/providers/WeatherProvider';
import WeatherHelper from '~/helpers/Weather';

test('Integration Weather', async () => {
  const geoLocation = {lat: -23.104219, lng: -47.716221};
  const API_KEY_OPEN_WEATHER = '2e716a24ce0220ed2ef00a7d546f9af5';

  const weather = new WeatherHelper(geoLocation, API_KEY_OPEN_WEATHER);
  const respWeather = await weather.fetchWeatherData();
  const expected = {
    country: 'BR',
    city: 'Tietê',
    temp: 23.97,
    temp_max: 23.97,
    temp_min: 23.97,
    description: 'céu limpo',
    icon: '01n',
  };
  expect(Object.keys(respWeather).length).toBe(7);
  expect(respWeather).toMatchObject(expected);
});

test('Home Screen Teste', () => {
  const dataProvider = {
    geoLocation: {lat: -23.104219, lng: -47.716221},
    weatherData: {
      city: 'São Paulo',
      country: 'Brasil',
      description: 'nublado',
      icon: '50d',
      temp: 18,
      temp_max: 27,
      temp_min: 10,
    },
    dateLastUpdate: '2022-07-03T16:30:00',
  };
  const tree = renderer.create(
    <WeatherContext.Provider value={dataProvider}>
      <Home />
    </WeatherContext.Provider>,
  );
  expect(tree).toMatchSnapshot();
});
