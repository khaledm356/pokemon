import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import PokemonList from '../components/Pokemon/PokemonList';

const Index = () => {
  const { data, isLoading, isError, error } = useQuery('categories', fetchCategories);

  async function fetchCategories() {
    const response = await axios.get('https://pokeapi.co/api/v2/type');
    return response.data.results;
  }

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <PokemonList categories={data} />
    </div>
  );
};

export default Index;
