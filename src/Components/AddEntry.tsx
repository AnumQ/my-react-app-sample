import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { FaPlusSquare } from "react-icons/fa";
import { log } from "../consoleHelper";
import { CLIENTS, PROJECTS } from "./Timesheet/MonthView";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      display: "flex",
      flexDirection: "column",
      margin: "auto",
      // width: "fit-content",
    },
    formControl: {
      marginTop: theme.spacing(2),
      minWidth: 120,
    },
    formControlLabel: {
      marginTop: theme.spacing(1),
    },

    textField: {},
    resize: {
      // height: "5rem",
    },
  })
);

export default function AddEntry() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const projects = PROJECTS;
  const clients = CLIENTS;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleAdd = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Button style={{ padding: 0, margin: 0 }} onClick={handleClickOpen}>
        <FaPlusSquare size={60} color="#507350" />
      </Button>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open max-width dialog
      </Button> */}
      <Dialog
        disableBackdropClick
        fullWidth={true}
        // fullWidth={fullWidth}
        maxWidth={"sm"}
        open={open}
        onClose={handleAdd}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Add Entry</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>Add entry here</DialogContentText> */}
          <form
            className={classes.form}
            noValidate
            style={{
              paddingLeft: 8,
            }}
          >
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="clients">Client</InputLabel>
              <Select
                autoFocus
                value={clients[0].id}
                onChange={() => {
                  log("handle project change");
                }}
                inputProps={{
                  name: "clients",
                  id: "clients",
                }}
              >
                {clients.map((item, index) => (
                  <MenuItem key={index} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </form>
          <form
            className={classes.form}
            noValidate
            style={{
              paddingLeft: 8,
            }}
          >
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="projects">Project</InputLabel>
              <Select
                label="projects"
                autoFocus
                value={projects[0].id}
                onChange={() => {
                  log("handle project change");
                }}
                inputProps={{
                  name: "projects",
                  id: "projects",
                }}
              >
                {projects.map((project, index) => (
                  <MenuItem key={index} value={project.id}>
                    {project.name}
                  </MenuItem>
                ))}
              </Select>
              <br />
            </FormControl>
          </form>

          <form
            className={classes.form}
            noValidate
            style={{
              display: "flex",
              padding: 0,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <TextField
              multiline
              id="outlined-multiline-static"
              label="Description"
              rows={3}
              variant="outlined"
              style={{ width: "100%" }}
            />
            {/* <TextField
              multiline
              id="standard-basic"
              label="Description"
              style={{ width: "100%", marginLeft: "0.5rem" }}
            /> */}
            <TextField
              className={classes.textField}
              inputProps={{
                style: {
                  textAlign: "center",
                  fontSize: 46,
                  fontFamily: "Open Sans",
                },
              }}
              InputProps={{
                classes: {
                  input: classes.resize,
                },
              }}
              id="standard-basic"
              label="Hours"
              variant="outlined"
              type="number"
              style={{
                width: "30%",
                marginLeft: "0.5rem",
              }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
