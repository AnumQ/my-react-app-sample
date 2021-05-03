import React from "react";
import styled from "styled-components";

const selectedShadow = "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset";
// const selectedShadow =
// "rgba(50, 50, 93, 0.05) 0px 30px 30px -20px inset, rgba(0, 0, 0, 0.2) 0px 18px 36px -1px inset";
export const regularShadow =
  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px";

type ButtonProps = {
  selected?: boolean;
  width?: number;
};

export const ButtonContainerWithShadowBox = styled.div<ButtonProps>`
  display: flex;
  background: ${({ selected }) => (selected ? "#dadada" : "#efefef")};
  // margin: 2px;
  width: ${({ width }) => (width ? width.toString() + "rem" : "100%")};

  height: ${({ selected }) => (selected ? "2.1rem" : "2rem")};
  justify-content: center;
  align-items: center;
  box-shadow: ${({ selected }) => (selected ? selectedShadow : regularShadow)};

  :hover {
    background: lightgray;
  }
`;
