import { useCallback } from "react";
import QRCode from "react-qr-code";
import { useParams } from "react-router-dom";
import { useGetDocument } from "src/hooks/document";
import { DocumentType } from "src/types/document.types";
import { Button } from "../ui/Button/Button";
import { AttachmentIcon, CheckCircle } from "../ui/Icon";
import { Loader } from "../ui/Loader";
import QRCodeWithBorder from "../ui/QRCodeWithBorder/QRCodeWithBorder";
import { Container, Description, Title } from "./Success.styled";

export const Success = () => {
  const { id } = useParams();

  const { data: documentNormal, isLoading: isLoadingNormalType } =
    useGetDocument(id as string, DocumentType.NORMAL);
  const { data: documentPsycholeptic, isLoading: isLoadingsycholepticType } =
    useGetDocument(id as string, DocumentType.PSYCHOLEPTIC);

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
      <Button
        variant="document"
        onClick={() => handleOpenDocument(documentPsycholeptic)}
        disabled={isLoadingsycholepticType}
      >
        <Loader isLoading={isLoadingsycholepticType} size={18}>
          <AttachmentIcon />
        </Loader>
        Declaratie PR Stupefiante
      </Button>
      <Button
        variant="document"
        onClick={() => handleOpenDocument(documentNormal)}
        disabled={isLoadingNormalType}
      >
        <Loader isLoading={isLoadingNormalType} size={18}>
          <AttachmentIcon />
        </Loader>
        PV Predare General
      </Button>
    </Container>
  );
};
