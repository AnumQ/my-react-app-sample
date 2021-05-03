import React from "react";

const DEBUG = process.env.REACT_APP_ENV === "production" ? false : true;

export const log = (data: any) => {
  if (DEBUG) {
    console.log(data);
  }
};
