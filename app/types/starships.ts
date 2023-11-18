export interface Starship {
  __typename: string;
  id: string;
  name: string;
  model: string;
  starshipClass: string;
  manufacturers: string[];
  costInCredits: number;
  length: number;
  crew: string;
  passengers: string;
  maxAtmospheringSpeed: number;
  hyperdriveRating: number;
  MGLT: number;
  cargoCapacity: number;
  consumables: string;
  pilotConnection: StarshipPilotsConnection;
  filmConnection: StarshipFilmsConnection;
}

interface StarshipPilotsConnection {
  __typename: string;
  pilots: Pilot[];
}

interface Pilot {
  __typename: string;
  name: string;
}

interface StarshipFilmsConnection {
  __typename: string;
  films: Film[];
}

interface Film {
  __typename: string;
  title: string;
}

interface StarshipsConnection {
  __typename: string;
  starships: Starship[];
}

export interface AllStarshipsData {
  allStarships: StarshipsConnection;
}
