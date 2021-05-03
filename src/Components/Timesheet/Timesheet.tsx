import React, { useEffect, useState } from "react";
import { FaHourglassHalf } from "react-icons/fa";
import styled from "styled-components";
import { MonthView } from "./MonthView";
import { TitleCalendarRow } from "./TitleCalendarRow";
import { WeekView } from "./WeekView";
import moment from "moment";
import { format } from "./Utils/formatter";

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

  const d = moment();
  const [date, setDate] = useState(d);

  const [title, setTitle] = useState(format(date));

  const [state, setState] = useState(DAY);

  useEffect(() => {
    console.log("CURREENT DAY CHANGED");
    console.log(format(date));
  }, [date]);

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
        <TitleCalendarRow state={state} setState={setState} title={title} />
        {state === DAY ? (
          <WeekView
            date={date}
            handleSetDate={(data) => {
              console.log("Handle set date");
              console.log(format(data));
              setDate(data);
              setTitle(format(data));
            }}
          />
        ) : null}
        {state === MONTH ? <MonthView /> : null}
      </div>
    </Container>
  );
};
