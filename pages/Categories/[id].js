import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import axios from 'axios';
import PokemonList from '../components/Pokemon/PokemonList';

const PokemonCategoryPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: category, isLoading, isError, error } = useQuery(['category', id], fetchCategory, {
    enabled: !!id,
  });

  async function fetchCategory() {
    const response = await axios.get(`https://pokeapi.co/api/v2/type/${id}`);
    return response.data;
  }

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  if (!category) return <p>No category found</p>;

  return (
    <div>
      <PokemonList category={category} />
    </div>
  );
};

export default PokemonCategoryPage;
