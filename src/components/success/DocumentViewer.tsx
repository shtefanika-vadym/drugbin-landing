import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Container } from "./DocumentViewer.styled";

const WORKER_URL =
  "https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js";

interface DocumentProps {
  document: string;
}

export const DocumentViewer: React.FC<DocumentProps> = ({ document }) => {
  return (
    <Container>
      {document && (
        <Worker workerUrl={WORKER_URL}>
          <Viewer fileUrl={document} />
        </Worker>
      )}
    </Container>
  );
};
