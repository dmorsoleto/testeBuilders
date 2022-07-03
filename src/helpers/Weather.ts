import {API_KEY_OPEN_WEATHER} from '../config/constants';
import {getWeatherData} from '../features/Splash/services';
import {TWeatherData} from '../features/Splash/types';
import {IGeolocation} from '../providers/types';
class WeatherHelper {
  private geolocation: IGeolocation = null;

  constructor(geolocationEntry: IGeolocation) {
    this.geolocation = geolocationEntry;
  }

  async fetchWeatherData(): Promise<TWeatherData> {
    const geoLocation = this.geolocation;
    console.log('API_KEY_OPEN_WEATHER', API_KEY_OPEN_WEATHER);
    const respWeatherData = await getWeatherData({
      lat: geoLocation.lat,
      lng: geoLocation.lng,
      key: API_KEY_OPEN_WEATHER,
    });
    console.log('respWeatherData', respWeatherData);
    console.log(respWeatherData.data.weather.description);

    const dataWeather = respWeatherData.data;
    const objDataWeather = {
      country: dataWeather.sys.country,
      city: dataWeather.name,
      temp: dataWeather.main.temp,
      temp_max: dataWeather.main.temp_max,
      temp_min: dataWeather.main.temp_min,
      description: dataWeather.weather[0].description,
      icon: dataWeather.weather[0].icon,
    };
    return objDataWeather;
  }
}

export default WeatherHelper;
