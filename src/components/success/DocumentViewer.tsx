import "@react-pdf-viewer/core/lib/styles/index.css";
import { useDocumnetQuery } from "src/api/drug";
import { DocumentType } from "src/types/drug.types";

const WORKER_URL =
  "https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js";

interface DocumentProps {
  id: string | number;
  document: any;
}

export const DocumentViewer: React.FC<DocumentProps> = ({ id, document }) => {
  const { data: documentNormal, isLoading } = useDocumnetQuery({
    id,
    type: DocumentType.NORMAL,
  });

  // const handleOpen = useCallback(() => {
  //   if (documentNormal) {
  //     const link = document.createElement("a");
  //     link.href = documentNormal;
  //   }
  // }, [documentNormal]);

  return (
    <div
      style={{
        border: "1px solid rgba(0, 0, 0, 0.3)",
        height: "350px",
        width: "100%",
      }}
    >
      {/* {!isLoading && documentNormal && (
        <Worker workerUrl={WORKER_URL}>
          <Viewer fileUrl={documentNormal} />
        </Worker>
      )} */}
      {/* {documentNormal && !isLoading && (
        <embed
          src={pdfUrl}
          type="application/pdf"
          width="100%"
          height="500"
        />
      )} */}
    </div>
  );
};
