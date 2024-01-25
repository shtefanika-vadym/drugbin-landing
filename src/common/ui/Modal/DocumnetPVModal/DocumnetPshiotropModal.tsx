import { DrugProps, PersonalDetailsProps } from '@/types/collect';
import { LogoIcon } from 'common/ui/Icon/Icon';
import Modal from '../Modal';
import {
  Border,
  Container,
  Content,
  ContentTable,
  DataContent,
  HeaderTable,
  ReasonContent,
  Span,
  Title,
} from './DocumnetPVModal.styled';

interface DocumnetPshiotropModalProps {
  data: DrugProps[];
  personalInfo: PersonalDetailsProps;
  handleCloseModal: () => void;
}

export const DocumnetPshiotropModal: React.FC<DocumnetPshiotropModalProps> = ({
  data,
  personalInfo,
  handleCloseModal,
}) => {
  return (
    <Modal callbackOnClose={handleCloseModal}>
      <Container>
        <div>
          <LogoIcon />
          <Border />
        </div>
        <DataContent>Data 24.01.2024</DataContent>
        <Title>Proces verbal de predare-primire stupefiante</Title>
        <Content>
          Subsemnatul(a)
          <Span>
            {personalInfo.firstName} {personalInfo.lastName}
          </Span>
          , predau spre distrugere in spitalul
          <Span>Spitalul Județean Sf. Ioan</Span> urmatoarele medicamente
          stupefiante:
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
      </Container>
    </Modal>
  );
};
