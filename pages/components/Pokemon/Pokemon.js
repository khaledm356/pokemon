import React from 'react';
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

import styles from './Pokemon.module.css';


const PokemonPage = ({ pokemon }) => {
  const chartOptions = {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: ['hp', 'attack', 'defense', 'special-attack', 'special-defense', 'speed'],
    },
  };

  const chartSeries = [
    {
      name: 'series-1',
      data: pokemon?.stats.map((stat) => stat.base_stat),
    },
  ];
  return (
    <div className={styles['pokemon-card']}>
        <div className={styles['pokemon-details']}>
            <div className={styles['image']}>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <div className={styles['info']}>
                <h1 className={styles['name']}>{pokemon.name}</h1>
                <div className={styles['data']}><strong>Height: </strong>{pokemon.height} -  <strong>Weight: </strong>{pokemon.weight}</div>
            </div>
        </div>
        <div className={styles['meta-data']}>
            <h2>Abilities</h2>
            <ul>
                {pokemon?.abilities.map((ability, index) => (
                    <li key={index}>{ability.ability.name}</li>
                ))}
            </ul>
        </div>
        <div className={styles['meta-data']}>
            <h2>Categories</h2>
            <ul>

            {pokemon?.types.map((type, index) => (
                <li key={index}>{type.type.name}</li>
            ))}
            </ul>
        </div>

        <div className={styles['chart']}>
          <Chart options={chartOptions} series={chartSeries} type="bar" width="500" />
        </div>
    </div>
  );
};

export default PokemonPage;
