import React from "react";
import { Loader } from "./Loader";

interface PDFViewerProps {
  pdfUrl: string;
}

export const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl }) => {
  return (
    <>
      {pdfUrl ? (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
            <iframe
              title="PDF Viewer"
              src={pdfUrl}
              style={{ width: "100%", minHeight: '22cm', border: "1px solid #ccc" }}
            ></iframe>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
            <h2> Cargando PDF </h2>
            <Loader />
        </div>
      )}
    </>
  );
};
