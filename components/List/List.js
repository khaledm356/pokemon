import React from "react";

export const List = ({ items, renderItem, WrapperComponent, keyExtractor }) => {
  return (
    <WrapperComponent>
      {items?.map((item) => (
        <React.Fragment key={keyExtractor(item)}>
          {renderItem(item)}
        </React.Fragment>
      ))}
    </WrapperComponent>
  );
};
