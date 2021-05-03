import React from "react";

export const format = (date: moment.Moment) => {
  return date.format("dddd") + ", " + date.format("DD MMM");
};
