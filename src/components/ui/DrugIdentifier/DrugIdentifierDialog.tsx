import { DrugsIdentify } from "@/types/drugsIdentify.types";
import { isEmpty } from "lodash-es";
import { useCallback } from "react";
import { useDrugIdentifier } from "../../../hooks/useDrugIdentifier";
import { Button } from "../Button/Button";
import { Empty } from "../Empty/Empty";
import { DrugIdentifierBox } from "./DrugIdentifierBox";
import {
  ButtonWrapper,
  Container,
  Count,
  DrugIdentifierWrapper,
  Title,
} from "./DrugIdentifierDialog.styled";

interface DrugIdentifierDialogProps {
  data: DrugsIdentify;
  closeDialog: () => void;
}

export const DrugIdentifierDialog: React.FC<DrugIdentifierDialogProps> = ({
  data,
  closeDialog,
}) => {
  const { drugList, save, modifyDrugField } = useDrugIdentifier(
    data,
    closeDialog
  );

  const handleRetry = useCallback(() => {
    document?.getElementById("file-upload")?.click();
  }, []);

  if (isEmpty(drugList))
    return (
      <>
        <Empty description="Nu au fost identificate pastile. Te rugăm să încerci din nou." />
        <Button size="FULL" onClick={handleRetry}>
          Încearcă din nou
        </Button>
      </>
    );

  return (
    <Container>
      <Title>Rezultatul procesării imaginii</Title>
      <div>
        <Count>Total: {data?.count}</Count>
        <DrugIdentifierWrapper>
          {drugList?.map((drug, index) => {
            return (
              <DrugIdentifierBox
                data={drug}
                handleModify={modifyDrugField}
                index={index}
              />
            );
          })}
        </DrugIdentifierWrapper>
      </div>
      <ButtonWrapper>
        <Button variant="secondary" onClick={closeDialog}>
          Închide
        </Button>
        <Button onClick={save}>Salvează</Button>
      </ButtonWrapper>
    </Container>
  );
};
