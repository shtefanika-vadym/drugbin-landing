import { useCallback, useState } from "react";
import QRCode from "react-qr-code";
import { useParams } from "react-router-dom";
import { useDocumnetQuery } from "src/api/drug";
import useDialog from "src/hooks/useDialog";
import { DocumentType } from "src/types/drug.types";
import { Button } from "../ui/Button/Button";
import { AttachmentIcon, CheckCircle } from "../ui/Icon";
import QRCodeWithBorder from "../ui/QRCodeWithBorder/QRCodeWithBorder";
import { DocumentViewer } from "./DocumentViewer";
import { Container, Description, Title } from "./Success.styled";

export const Success = () => {
  const [documentURL, setDocumentURL] = useState("");

  const { id } = useParams();
  const [
    DocumentViewerDialog,
    documentViewerDialogProps,
    toggleDocumentViewerDialog,
  ] = useDialog();

  const { data: documentNormal } = useDocumnetQuery({
    id,
    type: DocumentType.NORMAL,
  });
  const { data: documentPsycholeptic } = useDocumnetQuery({
    id,
    type: DocumentType.PSYCHOLEPTIC,
  });

  const openDialog = useCallback(() => {
    toggleDocumentViewerDialog(true);
  }, [toggleDocumentViewerDialog]);

  const handleSelectDocument = useCallback(
    (document: string | undefined) => {
      if (!document) return null;
      setDocumentURL(document);
      openDialog();
    },
    [openDialog]
  );

  const handleOpenDocument = useCallback((documentURL: string | undefined) => {
    window.open(documentURL);
  }, []);

  return (
    <Container>
      <DocumentViewerDialog {...documentViewerDialogProps}>
        {documentURL && <DocumentViewer document={documentURL} />}
      </DocumentViewerDialog>
      <CheckCircle />
      <Title>Cerere de colectare finalizată cu succes!</Title>
      <Description>
        Când ajungi la locația aleasă, trebuie să scanezi acest cod QR pentru a
        finaliza procesul de colectare.
        <br />
        Mulțumim că ai ales să colectezi medicamentele neutilizate astăzi!
      </Description>
      <QRCodeWithBorder>
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={`/gestionare?page=1?id=${id}`}
          viewBox={`0 0 256 256`}
        />
      </QRCodeWithBorder>
      <Button
        variant="document"
        onClick={() => handleOpenDocument(documentPsycholeptic)}
      >
        <AttachmentIcon />
        Declaratie PR Stupefiante
      </Button>
      <Button
        variant="document"
        onClick={() => handleOpenDocument(documentNormal)}
      >
        <AttachmentIcon />
        PV Predare General
      </Button>
    </Container>
  );
};
