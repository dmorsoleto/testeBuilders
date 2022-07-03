import {ReactNode} from 'react';
import {TWeatherData} from '../features/Splash/types';

export interface IGeolocation {
  lng: number;
  lat: number;
}

export type WeatherContextProps = {
  children: ReactNode;
};

export type WeatherContextType = {
  weatherData: TWeatherData;
  geoLocation: IGeolocation;
  dateLastUpdate: Date;
  handleWeatherData: (data: TWeatherData) => void;
  handleGeoLocation: (data: IGeolocation) => void;
};
