import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Starship} from '../types/starships';

type StarshipProps = {
  starship: Starship;
};

const StarshipCard: React.FC<StarshipProps> = ({starship}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Name: {starship?.name}</Text>
      <Text style={styles.text}>Model: {starship?.model}</Text>
      <Text style={styles.text}>Class: {starship?.starshipClass}</Text>
      <Text style={styles.text}>Manufacture: {starship?.manufacturers}</Text>
      <Text style={styles.text}>
        Cost in Credits: {starship?.costInCredits}
      </Text>
      <Text style={styles.text}>Length: {starship?.length}</Text>
      <Text style={styles.text}>Crew: {starship?.crew}</Text>
      <Text style={styles.text}>Passengers: {starship?.passengers}</Text>
      <Text style={styles.text}>
        Max Atmospher Speed: {starship?.maxAtmospheringSpeed}
      </Text>
      <Text style={styles.text}>
        Hyperdrive Rating: {starship?.hyperdriveRating}
      </Text>
      <Text style={styles.text}>MGLT: {starship?.MGLT}</Text>
      <Text style={styles.text}>Cargo Capacity: {starship?.cargoCapacity}</Text>
      <Text style={styles.text}>Consumables: {starship?.consumables}</Text>
    </View>
  );
};

export default React.memo(StarshipCard);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
  },
});
