import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import moment from "moment";
import { log } from "../../consoleHelper";
import { formatDateForMonthView } from "./Utils/formatter";
import MenuItem from "@material-ui/core/MenuItem";

const CLIENTS = ["iSNITT", "iMAL"];
const PROJECTS = ["iSNITT Portal", "iMAL Kartlegging"];

export const MonthRow = ({ date }: { date: string }) => {
  const [projects, setProjects] = useState(PROJECTS);
  return (
    <form
      className="MonthRow"
      noValidate
      autoComplete="off"
      style={{
        background: "clear",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
    >
      <TextField
        id="standard-basic"
        label="Date"
        defaultValue={date}
        // disabled={true}
      />
      <TextField
        id="standard-basic"
        label="Hours"
        style={{ width: "10%", marginLeft: "0.5rem" }}
      />
      <TextField
        style={{ width: "20%", marginLeft: "0.5rem" }}
        id="standard-select-currency"
        select
        label="Project"
        value={projects[0]}
        onChange={() => {
          //changed project
          console.log("project changed");
        }}
        // helperText="Please select project"
      >
        {projects.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="standard-basic"
        label="Description"
        style={{ width: "70%", marginLeft: "0.5rem" }}
      />
      {/* <TextField id="filled-basic" label="Project" variant="filled" /> */}
      {/* <TextField
            style={{ width: "70%", marginLeft: "0.5rem" }}
            id="outlined-basic"
            label="Description"
            variant="outlined"
          /> */}
    </form>
  );
};

const getDaysInMonth = (year: number, month: number) => {
  const monthIndex = month - 1;
  const names = Object.freeze([
    "Sunday",
    "Monday",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
  ]);
  const date = new Date(year, monthIndex, 1);
  const result = [];
  while (date.getMonth() == monthIndex) {
    result.push(`${formatDateForMonthView(date)}`);
    // result.push(`${date.getDate()}-${names[date.getDay()]}`);
    date.setDate(date.getDate() + 1);
  }
  return result;
};

export const MonthView = ({ date }: { date: Date }) => {
  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {
    const datesArray = getDaysInMonth(date.getFullYear(), date.getMonth() + 1);
    setDates(datesArray);
  }, [date]);

  const renderData = (date: string, index: number) => {
    return <MonthRow key={date} date={date} />;
  };

  return (
    <div>
      <div>{dates.map(renderData)}</div>
    </div>
  );
};
