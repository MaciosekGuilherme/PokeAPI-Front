import { NavigateFunction } from 'react-router-dom';

export const goToPokemonList = (navigate: NavigateFunction) => {
  navigate('/');
};

export const goToPokedex = (navigate: NavigateFunction) => {
  navigate('/pokedex');
};

export const goToPokemonDetail = (navigate: NavigateFunction, name: string) => {
  navigate(`/pokemon/${name}`);
};
