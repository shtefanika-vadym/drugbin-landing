import { DrugsIdentifyList } from "@/types/drugsIdentify.types";
import {
  ChangeEvent
} from "react";
import {
  Container,
  DataContainer,
  Description,
  Divider,
  Row
} from "./DrugIdentifierBox.styled";
import { DrugIdentifierEdit } from "./DrugIdentifierEdit";

interface DrugIdentifierBoxProps {
  data: DrugsIdentifyList;
  index: number;
  handleModify: (
    index: number,
    field: keyof DrugsIdentifyList,
    value: ChangeEvent<HTMLInputElement>
  ) => void;
}

export const DrugIdentifierBox: React.FC<DrugIdentifierBoxProps> = ({
  data,
  index,
  handleModify,
}) => {
  return (
    <Container>
      <Row columns={1}>
        <DataContainer>
          <DrugIdentifierEdit handleModify={handleModify} index={index} field="name">
            {data?.name.value}
          </DrugIdentifierEdit>
          <Description>Nume</Description>
        </DataContainer>
      </Row>
      <Divider />
      <Row>
        <DataContainer>
          <DrugIdentifierEdit handleModify={handleModify} index={index} field="amount">
            {data.amount}
          </DrugIdentifierEdit>
          <Description>Cantitate</Description>
        </DataContainer>
        <DataContainer>
          <DrugIdentifierEdit handleModify={handleModify} index={index} field="pack">
            {data.pack || ""}
          </DrugIdentifierEdit>
          <Description>Tipul de ambalaj</Description>
        </DataContainer>
      </Row>
    </Container>
  );
};

