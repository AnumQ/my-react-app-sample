import styled from "styled-components";

type ButtonProps = {
  selected?: boolean;
  width?: number;
  first?: boolean;
};

const selectedShadow = "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset";

export const ButtonContainerNoShadowBox = styled.div<ButtonProps>`
  display: flex;
  background: ${({ selected }) => (selected ? "#dadada" : "#efefef")};
  width: ${({ width }) => (width ? width.toString() + "rem" : "100%")};

  justify-content: center;
  align-items: center;
  border-top: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
  border-left: ${({ first }) => (first ? "1px" : "0px")} solid #e0e0e0;
  // border-bottom: 1px solid #e0e0e0;
  box-shadow: ${({ selected }) => (selected ? selectedShadow : null)};

  :hover {
    background: lightgray;
  }
`;
