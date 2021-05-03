import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const Container = styled.div`
  background: lightgray;
  font-family: "Raleway";
`;

const ButtonContainer = styled.div`
  display: flex;
  background: #efefef;
  margin: 2px;
  width: 2rem;
  justify-content: center;
  border-radius: 2px;

  :hover {
    background: lightgray;
  }
`;

const buttonStyle = {
  minWidth: "inherit",
  color: "#484848",
};

export const Timesheet = () => {
  return (
    <Container>
      <h4>Timesheet</h4>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* back and front arrow */}
        <ButtonContainer>
          <Button
            style={buttonStyle}
            onClick={() => {
              console.log("left");
            }}
          >
            <FaChevronLeft />
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button
            style={buttonStyle}
            onClick={() => {
              console.log("right");
            }}
          >
            <FaChevronRight />
          </Button>
        </ButtonContainer>
      </div>
    </Container>
  );
};
