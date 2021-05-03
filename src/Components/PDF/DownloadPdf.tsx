import _ from "react";
import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";
import { PDFData } from "./PDFData";

export const DownloadPdf = () => {
  return (
    <PDFDownloadLink document={<PDFData />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download now!"
      }
    </PDFDownloadLink>
  );
};
