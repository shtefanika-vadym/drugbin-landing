import { DrugProps, PersonalInfo } from '@/types/collect';
import { QRCode } from 'antd';
import successIcon from 'common/assets/fi_check-circle.svg';
import { SET_SHOW_MODAL } from 'common/slices/modalSlice';
import { Button } from 'common/ui/Button/Button';
import { isEmpty } from 'lodash-es';
import { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DocumentIcon } from '../Icon/Icon';
import { DocumnetModal } from '../Modal/DocumnetPVModal/DocumnetModal';
import { DocumnetPVModal } from '../Modal/DocumnetPVModal/DocumnetPVModal';
import { DocumnetPshiotropModal } from '../Modal/DocumnetPVModal/DocumnetPshiotropModal';
import QRCodeWithBorder from '../QRCodeWithBorder/QRCodeWithBorder';
import {
  ButtonWrapper,
  Description,
  DocumentWrapper,
  FinishCollectContent,
  Icon,
  Title,
} from './FinishCollect.styled';
import { FinishCollectLoader } from './FinishCollectLoader';

interface QrCodeProps {
  // data: { drugCode: string };
  data: DrugProps[];
  personalInfo: PersonalInfo;
  isLoading: boolean;
}

export const FinishCollect: React.FC<QrCodeProps> = ({
  data,
  isLoading,
  personalInfo,
}) => {
  const psycholepticObjects = useMemo(
    () => data.filter((obj) => obj.drugName.isPsycholeptic === true),
    [data]
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(SET_SHOW_MODAL({ isOpenModal: false, childModal: null }));
  };

  const handlePVGeneral = useCallback(() => {
    dispatch(
      SET_SHOW_MODAL({
        isOpenModal: true,
        childModal: <DocumnetPVModal handleCloseModal={handleCloseModal} />,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isLoading]);

  const handlePVStupefiante = useCallback(() => {
    dispatch(
      SET_SHOW_MODAL({
        isOpenModal: true,
        childModal: (
          <DocumnetPshiotropModal
            data={psycholepticObjects}
            personalInfo={personalInfo}
            handleCloseModal={handleCloseModal}
          />
        ),
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isLoading]);

  const handlePVDocument = useCallback(() => {
    dispatch(
      SET_SHOW_MODAL({
        isOpenModal: true,
        childModal: (
          <DocumnetModal
            personalInfo={personalInfo}
            handleCloseModal={handleCloseModal}
          />
        ),
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isLoading]);

  if (isLoading) return <FinishCollectLoader />;

  // NEW

  return (
    <FinishCollectContent>
      {/* <Viewer fileUrl={pdfUrlObject} /> */}
      {/* <iframe title="pdf" width="100%" height="100%" src={pdfUrlObject} /> */}
      {/* <Document file={{ data: document }}>
        <Page pageNumber={1} />
      </Document> */}
      <Icon src={successIcon} alt="" />
      <Title>Cerere de colectare finalizată cu succes!</Title>
      <Description>
        Când ajungi la locația aleasă, trebuie să scanezi acest cod QR pentru a
        finaliza procesul de colectare. <br /> Mulțumim că ai ales să colectezi
        medicamentele neutilizate astăzi!
      </Description>
      <QRCodeWithBorder>
        {data && (
          <QRCode
            value={'123-321'}
            size={150}
            icon="https://ibb.co/sVVwLVn"
            iconSize={32}
          />
        )}
      </QRCodeWithBorder>
      <DocumentWrapper>
        {!isEmpty(psycholepticObjects) ? (
          <Button variant="document" onClick={handlePVStupefiante}>
            <DocumentIcon />
            Declaratie PR Stupefiante
          </Button>
        ) : (
          <Button variant="document" onClick={handlePVDocument}>
            <DocumentIcon />
            Declaratie PR Stupefiante
          </Button>
        )}
        <Button variant="document" onClick={handlePVGeneral}>
          <DocumentIcon />
          PV Predare General
        </Button>
      </DocumentWrapper>
      <ButtonWrapper>
        <Button variant="primary" onClick={() => navigate('/proces')}>
          Află cum pregătești medicamentele
        </Button>
        <Button variant="secondary">Salvează în galerie</Button>
      </ButtonWrapper>
    </FinishCollectContent>
  );
};
