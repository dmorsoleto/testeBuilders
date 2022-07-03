/* eslint-disable consistent-return */
/* eslint-disable default-case */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {Platform} from 'react-native';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';

export const hasLocationPermission = async () => {
  let result = null;
  if (Platform.OS === 'ios') {
    result = await check(PERMISSIONS.IOS.LOCATION_ALWAYS);
  } else {
    result = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
  }

  switch (result) {
    case RESULTS.UNAVAILABLE:
      console.log(
        'This feature is not available (on this device / in this context)',
      );
      return false;
    case RESULTS.DENIED:
      if (Platform.OS === 'ios') {
        await request(PERMISSIONS.IOS.LOCATION_ALWAYS);
      } else {
        await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      }
      console.log(
        'The permission has not been requested / is denied but requestable',
      );
      return false;
    case RESULTS.LIMITED:
      console.log('The permission is limited: some actions are possible');
      break;
    case RESULTS.GRANTED:
      console.log('The permission is granted');
      return true;
    case RESULTS.BLOCKED:
      console.log('The permission is denied and not requestable anymore');
      return false;
  }
};
