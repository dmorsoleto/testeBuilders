import React from 'react';
import {
  View,
  Pressable,
  SafeAreaView,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';
import {TWeatherData} from '../../../../../features/Splash/types';
import {styles} from './styles';
import {objBgs} from '~/config/constants';

interface IHomeContainerProps {
  weatherData: TWeatherData;
  dateLastUpdate: Date;
  isLoading: Boolean;
  iconWeather: String;
  OnUpdateWeather: () => void;
}

const HomeScreenContainer: React.FC<IHomeContainerProps> = ({
  weatherData,
  dateLastUpdate,
  isLoading,
  iconWeather,
  OnUpdateWeather,
}) => (
  <SafeAreaView style={styles.container}>
    <Image source={objBgs[weatherData.icon]} style={styles.bgImage} />
    {weatherData && (
      <>
        <Image
          source={{uri: `https://openweathermap.org/img/wn/${iconWeather}.png`}}
          style={styles.icon}
        />
        <Text style={styles.text}>
          {Math.floor(weatherData.temp).toString()}°
        </Text>
        <Text style={styles.text}>
          mínima {Math.floor(weatherData.temp_min).toString()}° / máxima{' '}
          {Math.floor(weatherData.temp_max).toString()}°
        </Text>
        <Text style={styles.text}>
          {weatherData.city} / {weatherData.country}
        </Text>
        <Text style={[styles.text, styles.lastUpdate]}>
          Última atualização:{'\n'}
          {dateLastUpdate.toLocaleString()}
        </Text>
      </>
    )}
    {isLoading && (
      <View style={styles.loading}>
        <ActivityIndicator size={'large'} color={'#4287f5'} />
      </View>
    )}
    {!isLoading && (
      <Pressable onPress={OnUpdateWeather} style={styles.btnUpdate}>
        <Text style={styles.textBtn}>Atualizar</Text>
      </Pressable>
    )}
  </SafeAreaView>
);

export default HomeScreenContainer;
