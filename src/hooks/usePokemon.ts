import { useState, useEffect, useMemo } from "react";
import { getPaginatedAll } from "../api/api";
import { IPokemon } from "../types&Interfaces/interfaces";

type usePokemonReturnType = {
  query: string;
  setQuery: (a: string) => void;
  allPokemon: IPokemon[];
  page: number;
  rowsPerPage: number;
  setRowsPerPage: (a: number) => void;
  setPage: (a: number) => void;
};

export function usePokemon(): usePokemonReturnType {
  const [query, setQuery] = useState("");
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    (async () => {
      const res = await getPaginatedAll();
      if (res) setPokemons(res?.results);
    })();
  }, []);

  const allPokemon = useMemo(() => {
    setPage(0);
    return pokemons.filter(({ name }) =>
      name.toLowerCase().includes(query.toLowerCase())
    );
  }, [pokemons, query]);

  return {
    allPokemon,
    query,
    setQuery,
    page,
    rowsPerPage,
    setRowsPerPage,
    setPage,
  };
}
