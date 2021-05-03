import React from "react";

import { buttonStyle, TitleCalendarRow } from "./TitleCalendarRow";
import { Button } from "@material-ui/core";
import styled from "styled-components";

type ButtonProps = {
  selected?: boolean;
  width?: number;
  first?: boolean;
};

const ButtonContainer = styled.div<ButtonProps>`
  display: flex;
  background: ${({ selected }) => (selected ? "#dadada" : "#efefef")};
  width: ${({ width }) => (width ? width.toString() + "rem" : "100%")};

  justify-content: center;
  align-items: center;
  border-top: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
  border-left: ${({ first }) => (first ? "1px" : "0px")} solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;

  :hover {
    background: lightgray;
  }
`;
const DayItem = ({
  name,
  selected,
  first,
}: {
  name: string;
  selected?: boolean;
  first?: boolean;
}) => {
  return (
    <ButtonContainer selected={selected} first={first}>
      <Button
        style={buttonStyle}
        onClick={() => {
          console.log("left");
        }}
      >
        {name}
      </Button>
    </ButtonContainer>
  );
};

export const WeekDays = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "stretch",
        margin: "20px 0px 0px 0px",
      }}
    >
      <DayItem name="M" first={true} />
      <DayItem name="T" />
      <DayItem name="W" selected />
      <DayItem name="T" />
      <DayItem name="F" />
      <DayItem name="S" />
      <DayItem name="Su" />
    </div>
  );
};
