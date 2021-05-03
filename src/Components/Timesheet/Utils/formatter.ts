import React from "react";
import moment from "moment";

export const format = (date: moment.Moment) => {
  return date.format("dddd") + ", " + date.format("DD MMM");
};

export const formatDateForMonthView = (date: Date) => {
  const m = moment(date);
  return m.format("DD.MM.yyyy");
};
