import React from "react";

import {
  FaCalendar,
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Button } from "@material-ui/core";

import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  background: #efefef;
  margin: 2px;
  width: 2.5rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 2px;

  :hover {
    background: lightgray;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

const buttonStyle = {
  minWidth: "inherit",
  color: "#484848",
  width: "inherit",
  height: "inherit",
};

const textStyle = {
  fontSize: "14px",
};

export const FirstRow = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "clear",
        width: "800px",
        margin: "0 auto",
      }}
    >
      <div
        id="left"
        style={{
          display: "flex",
          justifyContent: "center",
          background: "clear",
          marginLeft: "1rem",
          marginRight: "1rem",
        }}
      >
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
        <ItemContainer>
          <text style={{ marginLeft: "0.3rem", fontWeight: "bold" }}>
            Today: Monday, 03 May{" "}
          </text>
        </ItemContainer>
      </div>
      <div id="right">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "clear",
            marginLeft: "1rem",
            marginRight: "1rem",
          }}
        >
          <ButtonContainer>
            <Button
              style={buttonStyle}
              onClick={() => {
                console.log("left");
              }}
            >
              <FaCalendarAlt size="16" />
            </Button>
          </ButtonContainer>
          {/* DAY and WEEK */}
          {/* <ItemContainer>
            <ButtonContainer style={{ width: "4rem" }}>
              <Button
                style={buttonStyle}
                onClick={() => {
                  console.log("left");
                }}
              >
                <div style={{ backgroundColor: "clear", marginTop: "1px" }}>
                  <text style={textStyle}>Day</text>
                </div>
              </Button>
            </ButtonContainer>
            <ButtonContainer style={{ width: "4rem" }}>
              <Button
                style={buttonStyle}
                onClick={() => {
                  console.log("right");
                }}
              >
                <div style={{ backgroundColor: "clear", marginTop: "1px" }}>
                  <text style={textStyle}>Week</text>
                </div>
              </Button>
            </ButtonContainer>
          </ItemContainer> */}
        </div>
      </div>
    </div>
  );
};
