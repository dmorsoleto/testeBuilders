import React, { useContext, useState } from 'react'
import WeatherHelper from '../../../../helpers/Weather'
import { WeatherContext } from '../../../../providers/WeatherProvider'
import HomeScreenContainer from './ui'

const HomeScreen: React.FC = () => {
  const {geoLocation, weatherData, dateLastUpdate, handleWeatherData} = useContext(WeatherContext)

  const [isLoading, setIsLoading] = useState(false)

  const handleOnUpdateWeather = async () => {
    setIsLoading(true)
    const weatherHelper = await new WeatherHelper(geoLocation).fetchWeatherData()
    handleWeatherData(weatherHelper)
    setIsLoading(false)
  }

  return <HomeScreenContainer 
          weatherData={weatherData}
          dateLastUpdate={dateLastUpdate}
          isLoading={isLoading}
          OnUpdateWeather={()=>handleOnUpdateWeather()}
         />
}

export default HomeScreen