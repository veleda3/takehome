import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import {useQuery, gql} from '@apollo/client';
import {AllStarshipsData} from './types/starships';
import requestLocationPermission from './permissions/requestLocationPermission';
import getCurrentLocation from './permissions/getCurrentLocation';
import Starship from './components/StartshipCard';
import {Location} from './types/location';
import calculateDistance from './helpers/calculateDistance';

const GET_STARSHIPS = gql`
  query GetStarships {
    allStarships {
      starships {
        name
        model
        starshipClass
        manufacturers
        costInCredits
        length
        crew
        id
        passengers
        maxAtmospheringSpeed
        hyperdriveRating
        MGLT
        cargoCapacity
        consumables
        pilotConnection {
          pilots {
            name
          }
        }
        filmConnection {
          films {
            title
          }
        }
      }
    }
  }
`;

const starWarsLandCoords = {
  latitude: 33.814831976267016,
  longitude: -117.92057887641796,
};

const StarshipTracker = () => {
  const [hasLocationPermission, setHasLocationPermission] =
    useState<boolean>(false);
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);
  const [distance, setDistance] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const {
    loading,
    error: apolloError,
    data,
  } = useQuery<AllStarshipsData>(GET_STARSHIPS);

  const handleLocationPermission = async () => {
    const hasPermission = await requestLocationPermission();
    setHasLocationPermission(hasPermission);
    if (hasPermission) {
      try {
        const location = await getCurrentLocation();
        setCurrentLocation(location?.coords);
      } catch (err) {
        setError('Unable to get current location');
      }
    }
  };

  useEffect(() => {
    handleLocationPermission();
  }, []);

  useEffect(() => {
    if (currentLocation !== null) {
      const response = calculateDistance(currentLocation, starWarsLandCoords);
      setDistance(response);
    }
  }, [currentLocation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>StarWars spaceships</Text>
      {hasLocationPermission && distance !== null && (
        <Text style={styles.subTitle}>
          Distance from current location to StarWars Land:{' '}
          {Math.round(distance)} Miles
        </Text>
      )}
      {loading && <Text>Loading starships...</Text>}
      {apolloError && (
        <Text>Error loading starships: {apolloError.message}</Text>
      )}
      {error && <Text>{error}</Text>}
      {!loading && !apolloError && (
        <FlatList
          data={data?.allStarships?.starships}
          renderItem={({item}) => <Starship starship={item} />}
          keyExtractor={item => item.id}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '2%',
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  subTitle: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default StarshipTracker;
