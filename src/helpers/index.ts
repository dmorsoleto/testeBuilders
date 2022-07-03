import {Dimensions, Platform, PixelRatio} from 'react-native';
import {TReturnWindowSize} from './types';

class Utils {
  static getWindowSize(): TReturnWindowSize {
    return {
      vwWidth: Dimensions.get('window').width,
      vwHeight: Dimensions.get('window').height,
    };
  }

  static moderateScale = (size: number): number => {
    const height = this.getWindowSize().vwHeight;
    let guidelineBaseHeight = height;
    if (guidelineBaseHeight > 800) {
      guidelineBaseHeight = 790;
    }
    const scaleHeight = guidelineBaseHeight / 667;
    const newSize = size * scaleHeight;

    return Platform.OS === 'ios'
      ? Math.round(PixelRatio.roundToNearestPixel(newSize))
      : Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  };
}

export default Utils;
