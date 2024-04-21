import React from "react";
import { render, screen } from "@testing-library/react";
import CategoryList from "./CategoryList";

describe("CategoryList component", () => {
  test("renders category list", () => {
    const categories = [
      { name: "Category 1", url: "https://example.com/category1" },
      { name: "Category 2", url: "https://example.com/category2" },
    ];

    render(<CategoryList categories={categories} />);

    const categoryContainerHeader = screen.getByText(/Browse All Pokemon Categories/i);
    expect(categoryContainerHeader).toBeInTheDocument();

    categories.forEach((category) => {
      const categoryLink = screen.getByText(category.name);
      expect(categoryLink).toBeInTheDocument();
      expect(categoryLink.tagName).toBe("A");
    });
  });
});
