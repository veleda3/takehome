import {Platform} from 'react-native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

const requestLocationPermission = async () => {
  let permissionType;
  if (Platform.OS === 'ios') {
    permissionType = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
  } else if (Platform.OS === 'android') {
    permissionType = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
  }
  if (!permissionType) {
    return false;
  }

  let permissionCheck = await check(permissionType);

  if (permissionCheck === RESULTS.DENIED) {
    const permissionRequest = await request(permissionType);
    return permissionRequest === RESULTS.GRANTED;
  }
  return permissionCheck === RESULTS.GRANTED;
};

export default requestLocationPermission;
