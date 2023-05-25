import React, { useContext, useEffect } from "react";
import { HomeHeader, PokeCardName } from "./styles";
import { goToPokedex, goToDetailPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../global/GlobalStateContext";
import axios from "axios";
import { BASE_URL } from "../../constants/url";

function Home() {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => {
        context.setPokemons(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [context.setPokemons]);

  const addToPokedex = (pokemon) => {
    const selectedPokemons = [...context.pokemons, pokemon];
    context.setPokemons(selectedPokemons);
    console.log(pokemon);
  };

  return (
    <div>
      <HomeHeader>
        <button onClick={() => goToPokedex(navigate)}>Ver minha POKEDEX</button>
        <h1> Home Page PokedeX </h1>
      </HomeHeader>
      {context.pokemons.map((pokemon) => (
        <PokeCardName
          key={pokemon.id}
          pokemon={pokemon}
          addToPokedex={context.addToPokedex}
        >
          {pokemon.name}
          <button onClick={() => context.addToPokedex(pokemon)}>
            Adicionar
          </button>
          <button>Detalhes</button>
          <button onClick={() => goToDetailPage(navigate)}>
            Ver Detalhes Pokemon
          </button>
          <button onClick={() => addToPokedex(pokemon)}>Adicionar</button>
          <button onClick={() => goToDetailPage(navigate)}>Detalhes</button>
        </PokeCardName>
      ))}
    </div>
  );
}

export default Home;
