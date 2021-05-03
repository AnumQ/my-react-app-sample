import React from "react";
import { FaHourglassHalf } from "react-icons/fa";
import styled from "styled-components";
import { TitleCalendarRow } from "./TitleCalendarRow";
import { WeekDays } from "./Weekdays";

export const Container = styled.div`
  display: "flex";
  background: clear;
  font-family: "Raleway";
  justify-content: "center";
`;

export const Timesheet = () => {
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
        <TitleCalendarRow />
        <WeekDays />
      </div>
    </Container>
  );
};
