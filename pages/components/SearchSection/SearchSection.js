import styles from './SearchSection.module.css';
import axios from 'axios';
import { useQuery } from 'react-query';
import Pokemon from '../Pokemon/Pokemon'


const fetchPokemon = async (name) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
  return response.data;
};
const SearchSection = ({ searchQuery, setSearchQuery }) => {
  const { data: pokemonData, isLoading, isError, error } = useQuery(
    ['pokemon', searchQuery],
    () => fetchPokemon(searchQuery),
    {
      enabled: !!searchQuery.trim(),
    }
  );

   const handleSearch = (e) => {
    if (!searchQuery.trim()) {
      return;
    }
    setSearchQuery(searchQuery.toLowerCase());
  };
  return (
    <div>
      <div className={styles['search-container']}>
        <header>Search Pokemon</header>
        <div className={styles['search-input']}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by Pokemon name"
            className={styles['form-control']}
          />
          <button className={styles['btn-search']} onClick={handleSearch}>Search</button>
        </div>
        {isLoading && <p className={`${styles['text-center']} ${styles['text-success']} ${styles['search-result']}`}>searching ...</p>}
        {isError && <p className={`${styles['text-center']} ${styles['text-error']}`}>Not found</p>}
      </div>

        {pokemonData && (<Pokemon pokemon={pokemonData}/>)}
    </div>
  );
};

export default SearchSection;
