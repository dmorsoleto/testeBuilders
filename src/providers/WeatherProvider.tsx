import React, {useState} from 'react';
import {TWeatherData} from '../features/Splash/types';
import {IGeolocation, WeatherContextProps, WeatherContextType} from './types';

export const WeatherContext = React.createContext<WeatherContextType | null>(
  null,
);

const WeatherProvider: React.FC<WeatherContextProps> = ({children}) => {
  const [weatherData, setWeatherData] = useState<TWeatherData | null>(null);
  const [geoLocation, setGeoLocation] = useState<IGeolocation | null>(null);
  const [dateLastUpdate, setDateLastUpdate] = useState<Date | null>(null);

  function handleWeatherData(data: TWeatherData) {
    setWeatherData(data);
    setDateLastUpdate(new Date());
  }

  function handleGeoLocation(data: IGeolocation) {
    setGeoLocation(data);
  }

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        geoLocation,
        dateLastUpdate,
        handleWeatherData,
        handleGeoLocation,
      }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
