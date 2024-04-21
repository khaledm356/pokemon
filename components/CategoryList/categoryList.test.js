import React from "react";
import { render, screen } from "@testing-library/react";
import CategoryList from "./CategoryList";

describe("CategoryList component", () => {
  test("renders category list", () => {
    // Mock categories data
    const categories = [
      { name: "Category 1", url: "https://example.com/category1" },
      { name: "Category 2", url: "https://example.com/category2" },
      // Add more mock categories as needed
    ];

    // Render the CategoryList component with mock categories
    render(<CategoryList categories={categories} />);

    // Check if CategoryContainerHeader is rendered with the correct text
    const categoryContainerHeader = screen.getByText(/Browse All Pokemon Categories/i);
    expect(categoryContainerHeader).toBeInTheDocument();

    // Check if each category name is rendered as a link
    categories.forEach((category) => {
      const categoryLink = screen.getByText(category.name);
      expect(categoryLink).toBeInTheDocument();
      expect(categoryLink.tagName).toBe("A");
    });
  });
});
