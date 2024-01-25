import { DrugProps, PersonalDetailsProps } from '@/types/collect';
import { CloseIcon, LogoIcon } from 'common/ui/Icon/Icon';
import Modal from '../Modal';
import {
  Border,
  Container,
  Content,
  ContentTable,
  DataContent,
  HeaderTable,
  IconWrapper,
  ReasonContent,
  SignatureWrapper,
  Span,
  Title,
} from './DocumnetPVModal.styled';

interface DocumnetPVModalProps {
  data: DrugProps[];
  personalInfo: PersonalDetailsProps;
  handleCloseModal: () => void;
}

export const DocumnetPVModal: React.FC<DocumnetPVModalProps> = ({
  data,
  personalInfo,
  handleCloseModal,
}) => {
  return (
    <Modal callbackOnClose={handleCloseModal}>
      <Container>
        <div>
          <IconWrapper>
            <LogoIcon />
            <div onClick={handleCloseModal}>
              <CloseIcon />
            </div>
          </IconWrapper>
          <Border />
        </div>
        <DataContent>Data 24.01.2024</DataContent>
        <Title>Proces verbal de predare-primire medicamente expirate</Title>
        <Content>
          Subsemnatul(a)
          <Span>
            {personalInfo.firstName} {personalInfo.lastName}
          </Span>
          , predau spre distrugere in spitalul
          <Span>Spitalul Județean Sf. Ioan</Span> urmatoarele medicamente:
        </Content>

        <HeaderTable>
          <Content>Nume</Content>
          <Content>Cantitate</Content>
        </HeaderTable>

        {data.map((drug) => {
          return (
            <ContentTable>
              <Content>{drug.drugName.name}</Content>
              <Content>
                {drug.quantity} ({drug.pack})
              </Content>
            </ContentTable>
          );
        })}

        <ReasonContent>
          Motivul predarii medicamentelor: PP-OP-05-F03, rev 06
        </ReasonContent>

        <SignatureWrapper>
          <Content>Am predat,</Content>
          <Content>
            {personalInfo.firstName} {personalInfo.lastName}
          </Content>
        </SignatureWrapper>
      </Container>
    </Modal>
  );
};
