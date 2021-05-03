import React from "react";
import { FaHourglassHalf } from "react-icons/fa";
import styled from "styled-components";
import { FirstRow } from "./FirstRow";

export const Container = styled.div`
  display: "flex";
  background: lightgray;
  font-family: "Raleway";
  justify-content: "center";
`;

export const Timesheet = () => {
  return (
    <Container>
      <div style={{ marginTop: "2rem" }}>
        <FaHourglassHalf color="gray" />
      </div>
      <FirstRow />
    </Container>
  );
};
