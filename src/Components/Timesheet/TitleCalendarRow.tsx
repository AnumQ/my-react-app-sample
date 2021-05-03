import React from "react";
import { FaCalendarAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { DAY, MONTH } from "./Timesheet";
import {
  ButtonContainerWithShadowBox,
  regularShadow,
} from "./UI/ButtonWithShadowbox";
import { ButtonContainerNoShadowBox } from "./UI/ButtonsNoShadowbox";

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

export const CustomButton = ({
  first,
  title,
  selected,
  onClick,
}: {
  first?: boolean;
  title: string;
  selected: boolean;
  onClick: () => void;
}) => {
  return (
    <ButtonContainerNoShadowBox
      first={first}
      selected={selected}
      style={{
        width: "4rem",
        marginLeft: "0rem",
        boxShadow: regularShadow,
        height: "2rem",
      }}
    >
      <Button style={buttonStyle} onClick={onClick}>
        <div
          style={{
            backgroundColor: "clear",
            marginTop: "1px",
          }}
        >
          <text style={textStyle}>{title}</text>
        </div>
      </Button>
    </ButtonContainerNoShadowBox>
  );
};

export const TitleCalendarRow = ({
  title,
  state,
  setState,
  handleLeft,
  handleRight,
  handleDay,
  handleMonth,
}: {
  title: string;
  state: number;
  setState: any;
  handleLeft: any;
  handleRight: any;
  handleDay: any;
  handleMonth: any;
}) => {
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
        <ButtonContainerWithShadowBox width={2.5}>
          <Button style={buttonStyle} onClick={handleLeft}>
            <FaChevronLeft />
          </Button>
        </ButtonContainerWithShadowBox>
        <ButtonContainerWithShadowBox width={2.5}>
          <Button style={buttonStyle} onClick={handleRight}>
            <FaChevronRight />
          </Button>
        </ButtonContainerWithShadowBox>
      </div>
      <div
        id="center"
        style={{ background: "clear", display: "flex", alignItems: "center" }}
      >
        <ItemContainer>
          <text style={{ fontWeight: "bold" }}>{title}</text>
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
          <ButtonContainerWithShadowBox style={{ marginRight: "1rem" }}>
            <Button
              style={buttonStyle}
              onClick={() => {
                console.log("calendar");
              }}
            >
              <FaCalendarAlt size="16" />
            </Button>
          </ButtonContainerWithShadowBox>
          {/* DAY and WEEK */}
          <ItemContainer>
            <CustomButton
              first={true}
              selected={state == DAY}
              title="Day"
              onClick={handleDay}
            />
            <CustomButton
              selected={state == MONTH}
              title="Month"
              onClick={handleMonth}
            />
            {/* <ButtonContainer style={{ width: "4rem", marginLeft: "0.5rem" }}>
              <Button
                style={buttonStyle}
                onClick={() => {
                  setState(MONTH);
                }}
              >
                <div
                  style={{
                    backgroundColor: "clear",
                    marginTop: "1px",
                  }}
                >
                  <text style={textStyle}>Month</text>
                </div>
              </Button>
            </ButtonContainer> */}
          </ItemContainer>
        </div>
      </div>
    </div>
  );
};
