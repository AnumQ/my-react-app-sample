import React, { useEffect, useState } from "react";
import "./App.css";
import { DisplayPdf, MyDocument } from "./Components/PDF/DisplayPdf";
import { PDFData } from "./Components/PDF/PDFData";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "@material-ui/core";
import WebFont from "webfontloader";
import { Timesheet } from "./Components/Timesheet/Timesheet";

function App() {
  const [currentState, setCurrentState] = useState(0);

  const docTitle = "iSNITT Timeliste April 2021";

  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          "Droid Sans",
          "Chilanka",
          "Open Sans",
          "Raleway",
          "Quicksand",
        ],
      },
    });
  }, []);

  const MyDoc = () => {
    return <MyDocument title={docTitle} />;
  };

  const DownloadPdf = () => {
    return (
      <Button color="primary" style={{}}>
        <PDFDownloadLink document={<MyDoc />} fileName={docTitle} style={{}}>
          {({ loading }) => (loading ? "loading..." : "Download")}
        </PDFDownloadLink>
      </Button>
    );
  };

  const BackButton = () => {
    return (
      <Button
        color="primary"
        style={{ float: "left" }}
        onClick={() => {
          setCurrentState(1);
        }}
      >
        Back
      </Button>
    );
  };

  const Main = () => {
    switch (currentState) {
      case 0:
        return <Timesheet />;
      case 1:
        return (
          <>
            <Button
              color="primary"
              onClick={() => {
                setCurrentState(2);
              }}
            >
              Display PDF
            </Button>
            <DownloadPdf />
            <PDFData />
          </>
        );
      case 2:
        return (
          <>
            <BackButton />
            <DisplayPdf title={docTitle} />{" "}
          </>
        );
      default:
        return <div>null</div>;
    }
  };

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
