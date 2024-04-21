import axios from 'axios';

const fetchPokemon = async (id) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch Pokemon data: ${error.message}`);
  }
};

export default fetchPokemon;
