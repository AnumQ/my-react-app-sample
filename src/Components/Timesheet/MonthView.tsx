import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import moment from "moment";
import { log } from "../../consoleHelper";
import { formatDateForMonthView } from "./Utils/formatter";
import MenuItem from "@material-ui/core/MenuItem";

export const CLIENTS = [
  { id: 1, name: "iSNITT" } as Entity,
  { id: 2, name: "iMAL" } as Entity,
];

type Entity = {
  id: number;
  name: string;
};

export const PROJECTS = [
  { id: 1, name: "iSNITT Portal" } as Entity,
  { id: 2, name: "iMAL Kartlegging" } as Entity,
];

export const MonthRow = ({
  date,
  projects,
}: {
  date: string;
  projects: Entity[];
}) => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  return (
    <form
      className="MonthRow"
      noValidate
      autoComplete="off"
      style={{
        background: "#f9f9f9",
        borderRadius: "12px",
        padding: "10px 10px 10px 20px",
        display: "flex",
        flexDirection: "column",
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
      }}
    >
      <div
        style={{
          background: "clear",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
          marginBottom: "1rem",
          width: "100%",
        }}
      >
        <TextField
          id="standard-basic"
          label="Date"
          defaultValue={date}
          style={{ width: "25%" }}
        />
        <TextField
          id="standard-basic"
          label="Hours"
          type="number"
          style={{ width: "10%", marginLeft: "0.5rem", textAlign: "center" }}
        />
        <TextField
          style={{ width: "30%", marginLeft: "0.5rem" }}
          id="standard-select-currency"
          select
          label="Project"
          value={selectedProject.name}
          onChange={(e) => {
            const p = projects.filter(
              (project) => project.name === e.target.value
            )[0];

            setSelectedProject(p);
          }}
          // helperText="Please select project"
        >
          {projects.map((option) => (
            <MenuItem key={option.id} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          multiline
          id="standard-basic"
          label="Description"
          style={{ width: "inherit", marginLeft: "0.5rem" }}
        />
        {/* Outlined */}
        {/* <TextField
          multiline
          id="outlined-multiline-static"
          label="Description"
          variant="outlined"
          style={{ width: "inherit", marginLeft: "0.5rem" }}
        /> */}
      </div>
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
  const [projects, setProjects] = useState(PROJECTS);
  useEffect(() => {
    const datesArray = getDaysInMonth(date.getFullYear(), date.getMonth() + 1);
    setDates(datesArray);
  }, [date]);

  const renderData = (date: string, index: number) => {
    return <MonthRow key={date} date={date} projects={projects} />;
  };

  return (
    <div>
      <div>{dates.map(renderData)}</div>
    </div>
  );
};
