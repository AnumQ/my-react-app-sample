import React, { useState } from "react";

import { buttonStyle } from "./TitleCalendarRow";
import { Button } from "@material-ui/core";
import { ButtonContainerNoShadowBox } from "./UI/ButtonsNoShadowbox";

const M = 0;
const T = 1;
const W = 2;
const TH = 3;
const F = 4;
const S = 5;
const SU = 6;

const dayData = [
  { day: M, title: "M" },
  { day: T, title: "T" },
  { day: W, title: "W" },
  { day: TH, title: "TH" },
  { day: F, title: "F" },
  { day: S, title: "S" },
  { day: SU, title: "Su" },
];

const DayItem = ({
  name,
  selected,
  first,
  onClick,
}: {
  name: string;
  selected?: boolean;
  first?: boolean;
  onClick: () => void;
}) => {
  return (
    <ButtonContainerNoShadowBox selected={selected} first={first}>
      <Button style={buttonStyle} onClick={onClick}>
        {name}
      </Button>
    </ButtonContainerNoShadowBox>
  );
};

export const WeekView = () => {
  // switch between weedays
  const [currentDay, setCurrentDay] = useState(M);

  const DisplayDay = ({ day }: { day: any }) => {
    return <div>Day {day}</div>;
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "stretch",
          margin: "20px 0px 0px 0px",
        }}
      >
        {dayData.map((day, index) => (
          <DayItem
            key={"Day" + index}
            selected={currentDay == day.day}
            name={day.title}
            onClick={() => {
              setCurrentDay(day.day);
            }}
          />
        ))}
      </div>
      <div
        style={{ background: "#f6f6f6", height: "500px", paddingTop: "1rem" }}
      >
        <DisplayDay day={currentDay} />
      </div>
    </>
  );
};
