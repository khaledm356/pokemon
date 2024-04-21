import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import PokemonList from '../../components/Pokemon/PokemonList';
import { fetchCategory } from '../../services/categoryService';

const PokemonCategoryPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: category, isLoading, isError, error } = useQuery(['category', id], () => fetchCategory(id), {
    enabled: !!id,
  });

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
