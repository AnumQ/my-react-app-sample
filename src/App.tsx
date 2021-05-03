import React, { useEffect, useState } from "react";
import "./App.css";
import { DisplayPdf, MyDocument } from "./Components/PDF/DisplayPdf";
import { PDFData } from "./Components/PDF/PDFData";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import WebFont from "webfontloader";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Container = styled.div`
  background: lightgray;
  font-family: "Raleway";
`;

const ButtonContainer = styled.div`
  display: flex;
  background: #efefef;
  margin: 2px;
  width: 2rem;
  justify-content: center;
  border-radius: 2px;

  :hover {
    background: lightgray;
  }
`;
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

  const buttonStyle = {
    minWidth: "inherit",
    color: "#484848",
  };

  const SwitchComps = () => {
    switch (currentState) {
      case 0:
        return (
          <Container>
            <h4>Timesheet</h4>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {/* back and front arrow */}
              <ButtonContainer>
                <Button
                  style={buttonStyle}
                  onClick={() => {
                    console.log("left");
                  }}
                >
                  <FaChevronLeft />
                </Button>
              </ButtonContainer>
              <ButtonContainer>
                <Button
                  style={buttonStyle}
                  onClick={() => {
                    console.log("right");
                  }}
                >
                  <FaChevronRight />
                </Button>
              </ButtonContainer>
            </div>
          </Container>
        );
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
