import { useDocumnetQuery } from 'common/api/recycleApi';
import Modal from '../Modal';
import { Container } from './DocumnetPVModal.styled';
import './index.css';

interface DocumnetPVModalProps {
  handleCloseModal: () => void;
}

export const DocumnetPVModal: React.FC<DocumnetPVModalProps> = ({
  handleCloseModal,
}) => {
  const { data: document } = useDocumnetQuery(
    '86b41a7f-00d5-4e86-83c5-72e893372858'
  );

  return (
    <Modal callbackOnClose={handleCloseModal}>
      <Container>
        {document && (
          <>
            {/* <iframe title="pdf" width="100%" height="100%" src={document} /> */}
            {/* <Viewer fileUrl={document} /> */}
            {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer fileUrl={document} />
            </Worker> */}
          </>
        )}
      </Container>
    </Modal>
  );
};

{
  /* <div>
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
      </Container> */
}
