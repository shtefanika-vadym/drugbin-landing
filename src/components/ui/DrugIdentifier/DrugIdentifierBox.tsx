import { ChangeEvent } from "react";
import {
  Container,
  DataContainer,
  Description,
  Divider,
  Row,
} from "./DrugIdentifierBox.styled";
import { DrugIdentifierEdit } from "./DrugIdentifierEdit";
import { Drugs } from "@/types/drug.types";

interface DrugIdentifierBoxProps {
  data: Drugs;
  index: number;
  handleModify: (
    index: number,
    field: keyof Drugs,
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
          <DrugIdentifierEdit
            handleModify={handleModify}
            index={index}
            field="name"
            disable
          >
            {data?.name.value}
          </DrugIdentifierEdit>
          <Description>Nume</Description>
        </DataContainer>
      </Row>
      <Divider />
      <Row>
        <DataContainer>
          <DrugIdentifierEdit
            handleModify={handleModify}
            index={index}
            field="amount"
            disable
          >
            {data.amount}
          </DrugIdentifierEdit>
          <Description>Cantitate</Description>
        </DataContainer>
        <DataContainer>
          <DrugIdentifierEdit
            handleModify={handleModify}
            index={index}
            field="pack"
            disable
          >
            Unitate
          </DrugIdentifierEdit>
          <Description>Tipul de ambalaj</Description>
        </DataContainer>
      </Row>
    </Container>
  );
};
