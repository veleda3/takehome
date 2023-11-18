import Geolocation from 'react-native-geolocation-service';
import {PermissionsAndroid, Platform} from 'react-native';
import {GeolocationPosition} from '../types/location';

const getCurrentLocation = async (): Promise<GeolocationPosition> => {
  if (Platform.OS === 'ios') {
    const authStatus = await Geolocation.requestAuthorization('whenInUse');
    if (authStatus !== 'granted') {
      throw new Error('Location permission not granted');
    }
  } else if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location permission',
        message: 'Location permission is required for this app',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
      throw new Error('Location permission not granted');
    }
  }
  // geoLocation call for both platforms
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        resolve(position);
      },
      error => {
        reject(error);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  });
};

export default getCurrentLocation;
