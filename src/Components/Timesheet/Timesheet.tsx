import React, { useEffect, useState } from "react";
import { FaHourglassHalf } from "react-icons/fa";
import styled from "styled-components";
import { MonthView } from "./MonthView";
import { TitleCalendarRow } from "./TitleCalendarRow";
import { WeekView } from "./WeekView";
import moment from "moment";
import {
  addDays,
  format,
  formatToMonthYear,
  nextMonth,
  prevMonth,
} from "./Utils/formatter";
import { log } from "../../consoleHelper";

export const Container = styled.div`
  display: "flex";
  background: clear;
  font-family: "Raleway";
  justify-content: "center";
`;

export const MONTH = 0;
export const DAY = 1;

export const Timesheet = () => {
  const [state, setState] = useState(MONTH);
  const [date, setDate] = useState(moment().toDate());

  useEffect(() => {
    // log(date);
  }, [date]);

  const handleLeft = () => {
    if (state === MONTH) {
      const newDate = prevMonth(date);
      setDate(newDate);
    }
  };

  const handleRight = () => {
    if (state === MONTH) {
      const newDate = nextMonth(date);
      setDate(newDate);
    }
  };

  const handleCalendar = () => {
    log("handleCalendar");
  };

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
        <TitleCalendarRow
          title={
            state === MONTH ? formatToMonthYear(date) : format(moment(date))
          }
          state={state}
          setState={setState}
          handleLeft={handleLeft}
          handleRight={handleRight}
          handleDay={() => {
            setState(DAY);
          }}
          handleMonth={() => {
            setState(MONTH);
          }}
        />
        {state === DAY ? <WeekView date={date} setDate={setDate} /> : null}
        {state === MONTH ? <MonthView date={date} /> : null}
      </div>
    </Container>
  );
};
