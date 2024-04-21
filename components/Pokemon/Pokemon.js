import React from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import Image from "next/image";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PokemonCard = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  max-width: 700px;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 3px #ccc;
  margin: 50px auto;
`;

const PokemonDetails = styled.div`
  display: flex;
  align-items: center;
`;

const PokemonDetailsHeader = styled.h1`
  text-transform: capitalize;
  font-size: 18px;
  margin-top: 0;
`;

const PokemonDetailsData = styled.span`
  color: #999999;
`;

const MetaData = styled.div`
  margin-bottom: 32px;
`;

const MetaDataHeading = styled.h2`
  color: #2482d2;
  font-size: 14px;
  text-transform: uppercase;
`;

const MetaDataList = styled.ul`
  display: flex;
  align-items: start;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MetaDataListItem = styled.li`
  border: 1px solid #ccc;
  text-align: center;
  border-radius: 30px;
  margin-right: 16px;
  padding: 12px 24px;
`;

const ChartWrapper = styled.div`
  text-align: center;
`;

const PokemonPage = ({ pokemon }) => {
  const chartOptions = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [
        "hp",
        "attack",
        "defense",
        "special-attack",
        "special-defense",
        "speed",
      ],
    },
  };

  const chartSeries = [
    {
      name: "series-1",
      data: pokemon?.stats.map((stat) => stat.base_stat),
    },
  ];
  return (
    <PokemonCard>
      <PokemonDetails>
        <div>
          <Image
            width={200}
            height={200}
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
        </div>
        <div>
          <PokemonDetailsHeader>{pokemon.name}</PokemonDetailsHeader>
          <PokemonDetailsData>
            <strong>Height: </strong>
            {pokemon.height} - <strong>Weight: </strong>
            {pokemon.weight}
          </PokemonDetailsData>
        </div>
      </PokemonDetails>
      <MetaData>
        <MetaDataHeading>Abilities</MetaDataHeading>
        <MetaDataList>
          {pokemon?.abilities.map((ability, index) => (
            <MetaDataListItem key={index}>
              {ability.ability.name}
            </MetaDataListItem>
          ))}
        </MetaDataList>
      </MetaData>
      <MetaData>
        <MetaDataHeading>Categories</MetaDataHeading>
        <MetaDataList>
          {pokemon?.types.map((type, index) => (
            <MetaDataListItem key={index}>{type.type.name}</MetaDataListItem>
          ))}
        </MetaDataList>
      </MetaData>

      <ChartWrapper>
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="bar"
          width="500"
        />
      </ChartWrapper>
    </PokemonCard>
  );
};

export default PokemonPage;
