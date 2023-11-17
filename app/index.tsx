import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, FlatList} from 'react-native';
import {useQuery, gql} from '@apollo/client';
import {AllStarshipsData} from './types/starships';
import requestLocationPermission from './permissions/RequestLocationPermission';

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

const StarshipTracker = () => {
  const [hasLocationPermission, setHasLocationPermission] =
    useState<boolean>(false);
  const {loading, error, data} = useQuery<AllStarshipsData>(GET_STARSHIPS);
  console.log('hasLocationPermission', hasLocationPermission);

  const handleLocationPermission = async () => {
    const hasPermission = await requestLocationPermission();
    setHasLocationPermission(hasPermission);
  };

  useEffect(() => {
    handleLocationPermission();
  }, []);

  return (
    <SafeAreaView>
      <Text>We are ready to track some spaceships!</Text>
      <FlatList
        data={data?.allStarships?.starships}
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default StarshipTracker;
