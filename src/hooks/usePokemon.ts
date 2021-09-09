import { useState, useEffect, useMemo } from "react";
import { getPaginatedAll } from "../api/api";
import { IPokemon } from "../types&Interfaces/interfaces";

type usePokemonReturnType = {
  query: string;
  setQuery: (a: string) => void;
  allPokemon: IPokemon[];
};

export function usePokemon(): usePokemonReturnType {
  const [query, setQuery] = useState("");
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  useEffect(() => {
    (async () => {
      const res = await getPaginatedAll();
      if (res) setPokemons(res?.results);
    })();
  }, []);

  const allPokemon = useMemo(() => {
    return pokemons.filter(({ name }) =>
      name.toLowerCase().includes(query.toLowerCase())
    );
  }, [pokemons, query]);

  return {
    allPokemon,
    query,
    setQuery,
  };
}
