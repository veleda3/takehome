import {getDistance, convertDistance} from 'geolib';
import {Location, Destination} from '../types/location';

const calculateDistance = (
  userLocation: Location,
  destination: Destination,
) => {
  const distanceInMeters = getDistance(
    {latitude: userLocation.latitude, longitude: userLocation.longitude},
    destination,
  );

  const distanceInMiles = convertDistance(distanceInMeters, 'mi');
  return distanceInMiles;
};

export default calculateDistance;
