import React from "react";
import { render, screen } from "@testing-library/react";
import { List } from "./List";

describe("List component", () => {
  const items = ["item1", "item2", "item3"];
  const renderItem = (item) => <div>{item}</div>;
  const WrapperComponent = ({ children }) => <div>{children}</div>;

  test("renders list items", () => {
    render(
      <List items={items} renderItem={renderItem} WrapperComponent={WrapperComponent} />
    );

    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
