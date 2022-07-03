import React from 'react'
import { SafeAreaView } from 'react-native'
import LottieView from 'lottie-react-native'
import { styles } from './styles'

const loading: string = require('../../../../../../assets/animations/loading.json')

const SplashScreenContainer: React.FC = () => (
        <SafeAreaView style={styles.containerLoading}>
            <LottieView
                source={loading}
                autoPlay
                loop
                style={styles.animation}
            />
        </SafeAreaView>
)

export default SplashScreenContainer