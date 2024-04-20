import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import axios from 'axios';
import Pokemon from '../components/Pokemon/Pokemon';

const PokemonPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: pokemon, isLoading, isError, error } = useQuery(['pokemon', id], fetchPokemon, {
    enabled: !!id,
  });

  function fetchPokemon() {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => response.data);
  }

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  if (!pokemon) return <p>No pokemon found</p>;

  return (
    <div className="pokemon">
      <Pokemon pokemon={pokemon}/>
    </div>
  );
};

export default PokemonPage;
