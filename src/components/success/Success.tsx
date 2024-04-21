import QRCode from "react-qr-code";
import { useParams } from "react-router-dom";
import { Button } from "../ui/Button/Button";
import { AttachmentIcon, CheckCircle } from "../ui/Icon";
import QRCodeWithBorder from "../ui/QRCodeWithBorder/QRCodeWithBorder";
import { Container, Description, Title } from "./Success.styled";

export const Success = () => {
  const { id } = useParams();
  // const { data: documentPsycholeptic } = useDocumnetQuery({
  //   id,
  //   type: DocumentType.PSYCHOLEPTIC,
  // });
  // const { data: documentNormal, isLoading } = useDocumnetUrlQuery({
  //   id,
  //   type: DocumentType.NORMAL,
  // });

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
      <Button variant="document">
        <AttachmentIcon />
        Declaratie PR Stupefiante
      </Button>
      <Button variant="document">
        <AttachmentIcon />
        PV Predare General
      </Button>
      {/* {id && documentPsycholeptic && (
        <DocumentViewer id={id} document={documentPsycholeptic} />
      )} */}
    </Container>
  );
};
