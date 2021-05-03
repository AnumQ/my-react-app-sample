import React, { useState } from "react";
import { Page, PDFViewer, Document, StyleSheet } from "@react-pdf/renderer";
import { PDFData } from "./PDFData";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
  },
});
// Create Document Component
export const MyDocument = ({ title }: { title: string }) => (
  <Document title={title} author="anum">
    <Page size="A4" style={styles.page}>
      <PDFData />
    </Page>
  </Document>
);

export const DisplayPdf = ({ title }: { title: string }) => {
  return (
    <PDFViewer style={{ width: "100vw", height: "100vh" }}>
      <MyDocument title={title} />
    </PDFViewer>
  );
};
