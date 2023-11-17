import React from 'react';
import {Text, SafeAreaView, FlatList} from 'react-native';
import {useQuery, gql} from '@apollo/client';

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
  const {loading, error, data} = useQuery(GET_STARSHIPS);

  console.log(JSON.stringify(data, null, 2));

  return (
    <SafeAreaView>
      <Text>We are ready to track some spaceships!</Text>
      <FlatList
        data={data?.allStarships?.starships}
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
};

export default StarshipTracker;
