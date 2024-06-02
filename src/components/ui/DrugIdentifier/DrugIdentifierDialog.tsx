import { DrugsIdentify, DrugsIdentifyList } from "@/types/drugsIdentify.types";
import { concat, reduce } from "lodash-es";
import { useCallback } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { toDrugsIdentifyAppend } from "src/utils/mappers";
import { Button } from "../Button/Button";
import { DrugIdentifierBox } from "./DrugIdentifierBox";
import {
  ButtonWrapper,
  Container,
  Count,
  DrugIdentifierWrapper,
  Title,
} from "./DrugIdentifierDialog.styled";

interface DrugIdentifierDialogProps {
  data?: DrugsIdentify;
  closeDialog?: () => void;
}

export const DrugIdentifierDialog: React.FC<DrugIdentifierDialogProps> = ({
  data,
  closeDialog,
}) => {
  const { watch } = useFormContext();
  const { replace } = useFieldArray({
    name: "drug",
  });

  const watchedFields = watch("drug");

  const handleSave = useCallback(() => {
    const validWatchedFields = watchedFields.filter(
      (item: DrugsIdentifyList) => item?.name?.value
    );
    const combineDrugs = concat(validWatchedFields, data?.drugs);

    const aggregatedDrugList = reduce(
      combineDrugs,
      (acc: DrugsIdentifyList[], current) => {
        const existingItem = acc.find(
          (item) => item.name.value === current.name.value
        );
        if (existingItem) {
          existingItem.amount += current.amount;
        } else {
          acc.push(current);
        }
        return acc;
      },
      []
    );

    const drugList = toDrugsIdentifyAppend(aggregatedDrugList);

    replace(drugList);

    if (closeDialog) closeDialog();
  }, [closeDialog, data?.drugs, replace, watchedFields]);

  return (
    <Container>
      <Title>Rezultatul procesării imaginii</Title>
      <div>
        <Count>Total: {data?.count}</Count>
        <DrugIdentifierWrapper>
          {data?.drugs?.map((drug) => {
            return <DrugIdentifierBox data={drug} />;
          })}
        </DrugIdentifierWrapper>
      </div>
      <ButtonWrapper>
        <Button variant="secondary" onClick={closeDialog}>
          Închide
        </Button>
        <Button onClick={handleSave}>Salvează</Button>
      </ButtonWrapper>
    </Container>
  );
};
