import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { List } from "../List/List";

const CategoryContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
  max-width: 1024px;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
`;

const CategoryContainerHeader = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  margin: 32px 0;
  color: #2482d2;
`;

const CategoryListWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
`;

const CategoryListItem = styled.li`
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

const CategoryList = ({ categories, id }) => {
  const keyExtractor = (category) => id(category);
  const renderItem = (item) => {
    return (
      <CategoryListItem>
        <Link href={`/Categories/${id(item)}`}>{item.name}</Link>
      </CategoryListItem>
    );
  };

  return (
    <CategoryContainer>
      <CategoryContainerHeader>
        Browse All Pokemon Categories
      </CategoryContainerHeader>
      <List
        items={categories}
        WrapperComponent={CategoryListWrapper}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
      ;
    </CategoryContainer>
  );
};

export default CategoryList;
