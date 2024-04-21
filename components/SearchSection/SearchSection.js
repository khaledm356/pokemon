import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useQuery } from "react-query";
import Pokemon from "../Pokemon/Pokemon"; // Assuming Pokemon component exists

const fetchPokemon = async (name) => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
  );
  return response.data;
};

const SearchContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
`;

const SearchHeader = styled.header`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  color: black;
  margin-bottom: 16px;
`;

const SearchInput = styled.div`
  max-width: 700px;
  margin: 0 auto;
  position: relative;
`;

const FormControl = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 12px;
`;

const BtnSearch = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 0 5px 5px 0;
  background-color: #2482d2;
  color: #fff;
  border: none;
  text-transform: uppercase;
  padding: 17px 20px;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }
`;

const TextCenter = styled.span`
  text-align: center;
`;

const TextSuccess = styled(TextCenter)`
  color: green;
`;

const TextError = styled(TextCenter)`
  color: red;
`;

const SearchSection = ({ searchQuery, setSearchQuery }) => {
  const [timeoutId, setTimeoutId] = useState(searchQuery);
  const [searchText, setSearchText] = useState("");

  const {
    data: pokemonData,
    isLoading,
    isError,
    error,
  } = useQuery(["pokemon", searchQuery], () => fetchPokemon(searchQuery), {
    enabled: !!searchQuery.trim(),
  });

  const handleSearch = (e) => {
    if (!searchQuery.trim()) {
      return;
    }
    setSearchQuery(searchQuery.toLowerCase());
  };

  const updateQuery = (e) => {
    setSearchText(e.target.value.toLowerCase());
    clearTimeout(timeoutId);
    setTimeoutId(
      setTimeout(() => {
        setSearchQuery(e.target.value.toLowerCase());
      }, 1000)
    );

    return () => clearTimeout(timeoutId);
  };

  return (
    <div>
      <SearchContainer>
        <SearchHeader>Search Pokemon</SearchHeader>
        <SearchInput>
          <FormControl
            type="text"
            value={searchText}
            onChange={updateQuery}
            placeholder="Search by Pokemon name"
          />
          <BtnSearch onClick={handleSearch}>Search</BtnSearch>
        </SearchInput>
        {isLoading && <TextSuccess>Searching...</TextSuccess>}
        {isError && <TextError>Not found</TextError>}
      </SearchContainer>
      {pokemonData && <Pokemon pokemon={pokemonData} />}
    </div>
  );
};

export default SearchSection;
