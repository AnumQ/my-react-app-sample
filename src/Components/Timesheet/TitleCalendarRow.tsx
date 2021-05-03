import React from "react";

import { FaCalendarAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "@material-ui/core";

import styled from "styled-components";

const shadowColor = "#adadad";
const selectedShadow = "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset";
// const selectedShadow =
// "rgba(50, 50, 93, 0.05) 0px 30px 30px -20px inset, rgba(0, 0, 0, 0.2) 0px 18px 36px -1px inset";

const regularShadow =
  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px";

type ButtonProps = {
  selected?: boolean;
  width?: number;
};

export const ButtonContainer = styled.div<ButtonProps>`
  display: flex;
  background: ${({ selected }) => (selected ? "#dadada" : "#efefef")};
  // margin: 2px;
  width: ${({ width }) => (width ? width.toString() + "rem" : "100%")};

  height: ${({ selected }) => (selected ? "2.1rem" : "2rem")};
  justify-content: center;
  align-items: center;
  box-shadow: ${({ selected }) => (selected ? selectedShadow : regularShadow)};

  :hover {
    background: lightgray;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const buttonStyle = {
  minWidth: "inherit",
  color: "#484848",
  width: "inherit",
  height: "inherit",
};

const textStyle = {
  fontSize: "14px",
};

export const TitleCalendarRow = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "clear",
        margin: "0 auto",
      }}
    >
      <div
        id="left"
        style={{
          display: "flex",
          justifyContent: "center",
          background: "clear",
        }}
      >
        <ButtonContainer width={2.5}>
          <Button
            style={buttonStyle}
            onClick={() => {
              console.log("left");
            }}
          >
            <FaChevronLeft />
          </Button>
        </ButtonContainer>
        <ButtonContainer width={2.5}>
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
