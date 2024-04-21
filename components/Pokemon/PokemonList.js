import React from "react";
import styled from "styled-components";
import { List } from "../List/List";
import Link from "next/link";
import { getIdFromUrl } from '../../utils/helper';

const PokemonContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
  max-width: 1024px;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
`;

const PokemonContainerHeader = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  margin: 32px 0;
  color: #2482d2;
  text-transform: capitalize;

  span {
    color: black;
  }
`;

const PokemonListWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
`;

const PokemonListItem = styled.li`
  background-color: white;
  display: flex;
  align-items: stretch;
  justify-content: center;

  a {
    background: white;
    text-align: center;
    text-decoration: none;
    box-shadow: 0 0 3px #ccc;
    display: block;
    width: 100%;
    color: #333;
    font-weight: bold;
    text-transform: capitalize;
    padding: 20px;
    cursor: pointer;
    &:hover {
      background: #f0f0f0;
    }
  }
`;

const PokemonList = ({ category }) => {
  const id = (item) => {
    const url = new URL(item.pokemon.url);
    const path = url.pathname.split("/");
    return path[4];
  };

  const renderItem = (item) => {
    return (
      <PokemonListItem>
        <Link href={`/pokemon/${getIdFromUrl(item.pokemon.url)}`}>{item.pokemon.name}</Link>
      </PokemonListItem>
    );
  };

  return (
    <PokemonContainer>
      <PokemonContainerHeader>
        pokemon in <span>{category?.name}</span> category
      </PokemonContainerHeader>
      <List
        items={category?.pokemon}
        WrapperComponent={PokemonListWrapper}
        keyExtractor={getIdFromUrl}
        renderItem={renderItem}
      />
    </PokemonContainer>
  );
};

export default PokemonList;
