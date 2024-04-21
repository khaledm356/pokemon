import React from "react";
import { render, screen } from "@testing-library/react";
import PokemonList from "./PokemonList";
import { getIdFromUrl } from '../../utils/helper'

describe("PokemonList", () => {
  const mockCategory = {
    name: "Test Category",
    pokemon: [
      { pokemon: { name: "Pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" } },
      { pokemon: { name: "Charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" } },
    ],
  };

  test("renders pokemon list", () => {
    render(<PokemonList category={mockCategory} />);

    const pokemonContainerHeader = screen.getByText(/Test Category/i);
    expect(pokemonContainerHeader).toBeInTheDocument();

    mockCategory.pokemon.forEach((item) => {
      const pokemonLink = screen.getByText(item.pokemon.name);
      expect(pokemonLink).toBeInTheDocument();
      expect(pokemonLink).toHaveAttribute("href", `/pokemon/${getIdFromUrl(item.pokemon.url)}`);
    });
  });
});
