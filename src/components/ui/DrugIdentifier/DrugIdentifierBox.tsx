import { DrugsIdentifyList } from "@/types/drugsIdentify.types";
import { ReactNode } from "react";
import { EditIcon } from "../Icon";
import {
  Container,
  DataContainer,
  Description,
  Divider,
  DrugEditContainer,
  MainText,
  Row,
} from "./DrugIdentifierBox.styled";

interface DrugIdentifierBoxProps {
  data: DrugsIdentifyList;
}

export const DrugIdentifierBox: React.FC<DrugIdentifierBoxProps> = ({
  data,
}) => {
  return (
    <Container>
      <Row columns={1}>
        <DataContainer>
          <DrugEdit>
            {data?.name.value} {data?.concentration}
          </DrugEdit>
          <Description>Nume</Description>
        </DataContainer>
      </Row>
      <Divider />
      <Row>
        <DataContainer>
          <DrugEdit>{data.amount}</DrugEdit>
          <Description>Cantitate</Description>
        </DataContainer>
        <DataContainer>
          <DrugEdit>{data.pack}</DrugEdit>
          <Description>Cutie</Description>
        </DataContainer>
      </Row>
    </Container>
  );
};

interface DrugEditProps {
  children: ReactNode;
}

const DrugEdit: React.FC<DrugEditProps> = ({ children }) => {
  return (
    <DrugEditContainer>
      <MainText>{children}</MainText>
      <div>
        <EditIcon height={14} width={14} />
      </div>
    </DrugEditContainer>
  );
};
