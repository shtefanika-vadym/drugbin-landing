import { Drugs } from "@/types/drug.types";
import { ChangeEvent } from "react";
import {
  Container,
  DataContainer,
  Description,
  Divider,
  Row,
} from "./DrugIdentifierBox.styled";
import { DrugIdentifierEdit } from "./DrugIdentifierEdit";

export const categoryLabels: Record<number, string> = {
  0: "Necunoscut",
  1: "Medicamente citotoxice și citostatice",
  2: "Inhalatoare",
  3: "Medicamente tăietoare",
  4: "Insuline",
  5: "Medicamente uzuale",
  6: "Suplimente",
  7: "Psiholeptice",
};

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
      <Row columns={2}>
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
        <DataContainer>
          <DrugIdentifierEdit
            handleModify={handleModify}
            index={index}
            field="name"
            disable
          >
            {categoryLabels[data?.name?.category as number]}
          </DrugIdentifierEdit>
          <Description>Categorie</Description>
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
