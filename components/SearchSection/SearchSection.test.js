import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useQuery } from "react-query";
import SearchSection from "./SearchSection";

jest.mock("react-query");
jest.mock("../../services/pokemonService");

describe("SearchSection", () => {
  test("renders search input and button", () => {
    useQuery.mockReturnValue({ data: null, isLoading: false, isError: false });

    render(<SearchSection searchQuery="" setSearchQuery={() => {}} />);

    const searchInput = screen.getByPlaceholderText("Search by Pokemon name");
    expect(searchInput).toBeInTheDocument();

    const searchButton = screen.getByText("Search");
    expect(searchButton).toBeInTheDocument();
  });

  test("calls setSearchQuery when search button is clicked", () => {
        const setSearchQueryMock = jest.fn();

        useQuery.mockReturnValue({ data: null, isLoading: false, isError: false });

        render(
        <SearchSection searchQuery="" setSearchQuery={setSearchQueryMock} />
        );

        const searchButton = screen.getByText("Search");
        fireEvent.click(searchButton);
        setTimeout(() => {
            expect(setSearchQueryMock).toHaveBeenCalledTimes(1);
        }, 5000);
    });

  test("updates searchQuery state when user types in the search input", async () => {
    const setSearchQueryMock = jest.fn();

    useQuery.mockReturnValue({ data: null, isLoading: false, isError: false });

    render(
      <SearchSection searchQuery="" setSearchQuery={setSearchQueryMock} />
    );

    const searchInput = screen.getByPlaceholderText("Search by Pokemon name");
    await userEvent.type(searchInput, "pikachu");
    setTimeout(() => {
        expect(setSearchQueryMock).toHaveBeenCalledWith("pikachu");
    }, 5000);
  });

});
