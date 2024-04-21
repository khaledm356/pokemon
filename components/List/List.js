import React from "react";

export const List = ({ items, renderItem, WrapperComponent }) => {
  return (
    <WrapperComponent>
      {items?.map((item,index) => (
        <React.Fragment key={index}>
          {renderItem(item)}
        </React.Fragment>
      ))}
    </WrapperComponent>
  );
};
