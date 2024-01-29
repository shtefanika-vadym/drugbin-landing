import { QRCode } from 'antd';
import { useDocumnetQuery } from 'common/api/recycleApi';
import { SET_SHOW_MODAL } from 'common/slices/modalSlice';
import { Button } from 'common/ui/Button';
import { DocumentIcon, SuccessIcon } from 'common/ui/Icon/Icon';
import ModalPreviewFile from 'common/ui/Modal/ModalPDF';
import QRCodeWithBorder from 'common/ui/QRCodeWithBorder/QRCodeWithBorder';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Container,
  Description,
  DocumentWrapper,
  Title,
} from './Success.styled';

export const Success = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data: documentPsycholeptic } = useDocumnetQuery({
    id,
    type: 'psycholeptic',
  });
  const { data: documentNormal } = useDocumnetQuery({ id, type: 'normal' });

  const handlePVDocument = useCallback(
    (type: string) => {
      dispatch(
        SET_SHOW_MODAL({
          isOpenModal: true,
          childModal: (
            <ModalPreviewFile
              previewFile={
                type === 'normal' ? documentNormal : documentPsycholeptic
              }
            />
          ),
        })
      );
    },
    [dispatch, documentNormal, documentPsycholeptic]
  );

  return (
    <Container>
      <SuccessIcon />
      <Title>Cerere de colectare finalizată cu succes!</Title>
      <Description>
        Când ajungi la locația aleasă, trebuie să scanezi acest cod QR pentru a
        finaliza procesul de colectare. <br /> Mulțumim că ai ales să colectezi
        medicamentele neutilizate astăzi!
      </Description>
      <QRCodeWithBorder>
        <QRCode
          value={`/gestionare?page=1?id=${id}`}
          size={150}
          icon="https://ibb.co/sVVwLVn"
          iconSize={32}
        />
      </QRCodeWithBorder>
      <DocumentWrapper>
        <Button
          variant="document"
          onClick={() => handlePVDocument('psycholeptic')}
        >
          <DocumentIcon />
          Declaratie PR Stupefiante
        </Button>
        <Button variant="document" onClick={() => handlePVDocument('normal')}>
          <DocumentIcon />
          PV Predare General
        </Button>
      </DocumentWrapper>
      {/* <ButtonWrapper>
        <Button variant="secondary" onClick={downloadQRCode}>
          Salvează în galerie
        </Button>
      </ButtonWrapper> */}
    </Container>
  );
};
