import React from "react";
import moment from "moment";
import { log } from "../../../consoleHelper";

export const format = (date: moment.Moment) => {
  return date.format("dddd") + ", " + date.format("DD MMM");
};

export const formatDateForMonthView = (date: Date) => {
  const m = moment(date);
  return m.format("DD.MM.yyyy");
};

export const formatToMonthYear = (date: Date) => {
  const m = moment(date);
  return m.format("MMM YY");
};

export const addDays = (currentDate: Date, days: number) => {
  const date = new Date(currentDate);
  date.setDate(date.getDate() + days);
  return date;
};

export const prevMonth = (currentDate: Date) => {
  const date = new Date(currentDate);
  date.setMonth(date.getMonth() - 1);
  return date;
};

export const nextMonth = (currentDate: Date) => {
  const date = new Date(currentDate);
  date.setMonth(date.getMonth() + 1);
  return date;
};
