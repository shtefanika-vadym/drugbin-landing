import { QRCode } from 'antd';
import successIcon from 'common/assets/fi_check-circle.svg';
import { Button } from 'common/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { DocumentBox } from '../DocumentBox/DocumentBox';
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
import { useDocumnetQuery } from 'common/api/recycleApi';

interface QrCodeProps {
  data: { drugCode: string };
  isLoading: boolean;
}

export const FinishCollect: React.FC<QrCodeProps> = ({ data, isLoading }) => {
  const navigate = useNavigate();
  const { data: document } = useDocumnetQuery(
    '66c8fb87-8762-4ed4-b34c-8eea50c7254e'
  );

  const pdfBlob = new Blob([document], { type: 'application/pdf' });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const pdfUrlObject = URL.createObjectURL(pdfBlob);

  if (isLoading) return <FinishCollectLoader />;

  return (
    <FinishCollectContent>
      {/* <embed
        src={pdfUrlObject}
        type="application/pdf"
        width="100%"
        height="600px"
      /> */}
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
        <DocumentBox name="Declaratie PR Stupefiante" />
        <DocumentBox name="PV Predare General" />
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
