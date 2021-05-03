import React from "react";

import { buttonStyle } from "./TitleCalendarRow";
import { Button } from "@material-ui/core";
import { ButtonContainerNoShadowBox } from "./UI/ButtonsNoShadowbox";

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
    <ButtonContainerNoShadowBox selected={selected} first={first}>
      <Button
        style={buttonStyle}
        onClick={() => {
          console.log("left");
        }}
      >
        {name}
      </Button>
    </ButtonContainerNoShadowBox>
  );
};

export const WeekView = () => {
  // switch betwe
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
