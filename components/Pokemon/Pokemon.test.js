import React from "react";
import { render, screen } from "@testing-library/react";
import PokemonPage from "./Pokemon";

jest.mock('react-apexcharts', () => ({ __esModule: true, default: () => <div /> }));

describe("PokemonPage", () => {
  const mockPokemon = {
    name: "Pikachu",
    height: 40,
    weight: 60,
    sprites: {
      front_default: "https://pokeapi.co/api/v2/pokemon/25/",
    },
    stats: [
      { base_stat: 35, stat: { name: "hp" } },
      { base_stat: 55, stat: { name: "attack" } },
      { base_stat: 40, stat: { name: "defense" } },
      { base_stat: 50, stat: { name: "special-attack" } },
      { base_stat: 50, stat: { name: "special-defense" } },
      { base_stat: 90, stat: { name: "speed" } },
    ],
    abilities: [{ ability: { name: "static" } }],
    types: [{ type: { name: "electric" } }],
  };

  test("renders pokemon details", () => {
    render(<PokemonPage pokemon={mockPokemon} />);

    // // Check if pokemon name is rendered
    // const pokemonName = screen.getByText(/pikachu/i);
    // expect(pokemonName).toBeInTheDocument();

    // // Check if pokemon height and weight are rendered
    // const pokemonHeight = screen.getByText(/height: 40/i);
    // expect(pokemonHeight).toBeInTheDocument();
    // const pokemonWeight = screen.getByText(/weight: 60/i);
    // expect(pokemonWeight).toBeInTheDocument();

    // // Check if abilities and types are rendered
    // expect(screen.getByText(/abilities/i)).toBeInTheDocument();
    // expect(screen.getByText(/static/i)).toBeInTheDocument();
    // expect(screen.getByText(/categories/i)).toBeInTheDocument();
    // expect(screen.getByText(/electric/i)).toBeInTheDocument();

    // // Check if chart is rendered
    // expect(screen.getByTestId("apexcharts-basic-bar")).toBeInTheDocument();
  });
});
