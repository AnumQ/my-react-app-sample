import React, { useMemo, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { DisplayPdf, MyDocument } from "./Components/PDF/DisplayPdf";
import { PDFData } from "./Components/PDF/PDFData";
import {
  PDFDownloadLink,
  Document,
  Page,
  View,
  Text,
  BlobProvider,
} from "@react-pdf/renderer";
import { Button } from "@material-ui/core";

function App() {
  const [currentState, setCurrentState] = useState(1);

  const docTitle = "iSNITT Timeliste April 2021";

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

  const SwitchComps = () => {
    switch (currentState) {
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
      <SwitchComps />
    </div>
  );
}

export default App;
