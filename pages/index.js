import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import CategoryList from './components/CategoryList/CategoryList';
import SearchSection from './components/SearchSection/SearchSection';

  const fetchCategories = async() => {
    const response = await axios.get('https://pokeapi.co/api/v2/type');
    return response.data.results;
  }

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: categories } = useQuery('categories', fetchCategories);

  const id = (category) => {
    const url = new URL(category.url);
    const path = url.pathname.split("/");
    return path[4]
  }

  return (
    <div className='main'>
      <SearchSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CategoryList categories={categories} id={id} />
    </div>
  );
};

export default Home;
