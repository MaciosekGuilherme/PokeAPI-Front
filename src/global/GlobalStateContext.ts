import React from 'react';

interface Pokemon {
  id: number;
  name: string;
}

interface GlobalStateData {
  pokemons: Pokemon[];
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
  pokedex: Pokemon[];
  setPokedex: React.Dispatch<React.SetStateAction<Pokemon[]>>;
}

export const GlobalStateContext = React.createContext<GlobalStateData>({} as GlobalStateData);
