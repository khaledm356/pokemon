import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import Pokemon from '../../components/Pokemon/Pokemon';
import fetchPokemon from '../../services/pokemonService';

const PokemonPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: pokemon, isLoading, isError, error } = useQuery(['pokemon', id], () => fetchPokemon(id), {
    enabled: !!id,
  });

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
