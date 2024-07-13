import React from "react";
import { Document } from "react-pdf";
import myfile from "../assets/resume.pdf";

export default function Pdf() {
  return (
    <div>
      <Document file={myfile}></Document>

      hiii
    </div>
  );
}
