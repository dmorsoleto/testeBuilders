/**
 * @format
 */

import 'react-native';
import React from 'react';
import Home from '../src/features/Home/screens/HomeScreen/index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {WeatherContext} from '../src/providers/WeatherProvider';

test('Home Screen Teste', () => {
  const dataProvider = {
    geoLocation: {lat: 30, lng: 100},
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
