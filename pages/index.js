import React, { useState } from 'react';
import { useQuery } from 'react-query';
import CategoryList from '../components/CategoryList/CategoryList';
import SearchSection from '../components/SearchSection/SearchSection';
import { fetchCategories } from '../services/categoryService';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: categories } = useQuery('categories', fetchCategories);

  const id = (category) => {
    const url = new URL(category.url);
    const path = url.pathname.split("/");
    return path[4];
  };

  return (
    <div className='main'>
      <SearchSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CategoryList categories={categories} />
    </div>
  );
};

export default Home;
