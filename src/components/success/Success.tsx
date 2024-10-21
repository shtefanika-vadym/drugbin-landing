import { useCallback } from "react";
import QRCode from "react-qr-code";
import { useParams } from "react-router-dom";
import {
  useGetDocumentByCategories,
  useGetSuccessDetails,
} from "src/hooks/document";
import { Button } from "../ui/Button/Button";
import { AttachmentIcon, CheckCircle } from "../ui/Icon";
import { Loader } from "../ui/Loader";
import QRCodeWithBorder from "../ui/QRCodeWithBorder/QRCodeWithBorder";
import { Container, Description, Title } from "./Success.styled";

export const Success = () => {
  const { id } = useParams();

  const { data, isLoading: isSuccessDetailsLoading } = useGetSuccessDetails(
    id as string,
    !!id
  );
  const { data: documents, isLoading } = useGetDocumentByCategories(
    id as string,
    data?.types ?? []
  );

  const handleOpenDocument = useCallback((documentURL: string | undefined) => {
    window.open(documentURL);
  }, []);

  return (
    <Container>
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
      <Loader isLoading={isLoading || isSuccessDetailsLoading} size={42}>
        {documents?.map((document, index) => (
          <Button
            key={index}
            variant="document"
            onClick={() => handleOpenDocument(document.pdfURL)}
            disabled={isLoading}
          >
            <AttachmentIcon />
            {document.label}
          </Button>
        ))}
      </Loader>
    </Container>
  );
};
