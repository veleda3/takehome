export type Location = {
  latitude: number;
  longitude: number;
  altitude: number | null;
  accuracy?: number;
  altitudeAccuracy?: number | null | undefined;
  speed: number | null;
  heading: number | null;
};

export type GeolocationPosition = {
  coords: Location;
  timestamp: number;
};

export type Destination = {
  latitude: number;
  longitude: number;
};
