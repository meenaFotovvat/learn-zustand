import { useCombinedStore } from "../Store";
import { useEffect } from "react";

export const PokemonList = () => {
  const getPokemon = useCombinedStore((state) => state.fetchPokemon);
  const pokemonList = useCombinedStore((state) => state.pokemon);

  useEffect(() => {
    getPokemon();
  }, [getPokemon]);

  if (!pokemonList.lenght) {
    return "Loading";
  }

  return (
    <ol>
      {pokemonList.map((item) => {
        return <li key={item.name}>{item.name}</li>;
      })}
    </ol>
  );
};
