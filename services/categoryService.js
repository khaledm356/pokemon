import axios from 'axios';

export const fetchCategory = async (id) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/type/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch category data: ${error.message}`);
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/type');
    return response.data.results;
  } catch (error) {
    throw new Error(`Failed to fetch categories: ${error.message}`);
  }
};
