import { PersonalDetailsProps } from '@/types/collect';
import { LogoIcon } from 'common/ui/Icon/Icon';
import Modal from '../Modal';
import {
  Border,
  Container,
  Content,
  DataContent,
  SignatureWrapper,
  Span,
  Title,
} from './DocumnetPVModal.styled';

interface DocumnetModalProps {
  handleCloseModal: () => void;
  personalInfo: PersonalDetailsProps;
}

export const DocumnetModal: React.FC<DocumnetModalProps> = ({
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
          , nu predau spre distrugere in spitalul
          <Span>Spitalul Județean Sf. Ioan</Span> niciunu medicament psihotrop.
        </Content>
        <SignatureWrapper>
          <Content>Semnatura</Content>
          <Content>
            {personalInfo.firstName} {personalInfo.lastName}
          </Content>
        </SignatureWrapper>
      </Container>
    </Modal>
  );
};
