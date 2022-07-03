import React from 'react';
import { View, Pressable, SafeAreaView, Text, Image, ActivityIndicator } from 'react-native';
import { objBgs } from '../../../../../config/constants';
import { TWeatherData } from '../../../../../features/Splash/types';
import { styles } from './styles';



interface IHomeContainerProps {
    weatherData: TWeatherData;
    dateLastUpdate: Date;
    isLoading: Boolean;
    OnUpdateWeather: () => void;
}

const HomeScreenContainer: React.FC<IHomeContainerProps> = ({
    weatherData,
    dateLastUpdate,
    isLoading,
    OnUpdateWeather
}) => (
        <SafeAreaView style={styles.container}>
            <Image source={objBgs[weatherData.icon]} style={styles.bgImage} />
            {weatherData && <>
                <Image source={{uri: `https://openweathermap.org/img/wn/50d.png`}} style={styles.icon} />
                <Text style={styles.text}>{parseInt(weatherData.temp, 10)}°</Text>
                <Text style={styles.text}>mínima {parseInt(weatherData.temp_min, 10)}° / máxima {parseInt(weatherData.temp_max, 10)}°</Text>
                <Text style={styles.text}>{weatherData.city} / {weatherData.country}</Text>
                <Text style={[styles.text, styles.lastUpdate]}>Última atualização:{`\n`}{dateLastUpdate.toLocaleString()}</Text>
            </>}
            {isLoading && <View style={styles.loading}><ActivityIndicator size={'large'} color={`#4287f5`} /></View>}
            {!isLoading && <Pressable onPress={OnUpdateWeather} style={styles.btnUpdate}>
                <Text style={styles.textBtn}>Atualizar</Text>
            </Pressable>}
        </SafeAreaView>
)

export default HomeScreenContainer;