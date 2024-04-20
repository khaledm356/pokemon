import React from 'react';
import Link from 'next/link';
import styles from './PokemonList.module.css';

const PokemonList = ({ category }) => {
    const id = (category) => {
        const url = new URL(category.url);
        const path = url.pathname.split('/');
        return path[4];
    };
  return (
    <div className={styles['pokemon-container']}>
      <header>pokemon in <span>{category?.name}</span> category</header>
      <ul className={styles['pokemon-list']}>
        {category?.pokemon.map((pokemon) => (
          <li className={styles.pokemon} key={id(pokemon["pokemon"])}>
            <Link className={styles['pokemon-link']} href={`/pokemon/${id(pokemon["pokemon"])}`}>
              {pokemon["pokemon"].name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
