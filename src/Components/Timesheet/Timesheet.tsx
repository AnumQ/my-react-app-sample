import React, { useState } from "react";
import { FaHourglassHalf } from "react-icons/fa";
import styled from "styled-components";
import { MonthView } from "./MonthView";
import { TitleCalendarRow } from "./TitleCalendarRow";
import { WeekView } from "./WeekView";

export const Container = styled.div`
  display: "flex";
  background: clear;
  font-family: "Raleway";
  justify-content: "center";
`;

export const MONTH = 0;
export const DAY = 1;

export const Timesheet = () => {
  // switch betwen month or day
  const [state, setState] = useState(DAY);

  return (
    <Container>
      <div style={{ marginTop: "2rem" }}>
        <FaHourglassHalf color="gray" />
      </div>
      <div
        style={{
          width: "800px",
          margin: "0 auto",
        }}
      >
        <TitleCalendarRow state={state} setState={setState} />
        {state === DAY ? <WeekView /> : null}
        {state === MONTH ? <MonthView /> : null}
      </div>
    </Container>
  );
};
