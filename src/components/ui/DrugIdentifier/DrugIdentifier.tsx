import { DrugsIdentify } from "@/types/drugsIdentify.types";
import { useCallback, useRef } from "react";
import { useDrugsIdentifyMutation } from "src/api/drug";
import useDialog from "src/hooks/useDialog";
import { LoadingScreen } from "../LoadingScreen/LoadingScreen";
import { Container, OpenText } from "./DrugIdentifier.styled";
import { DrugIdentifierDialog } from "./DrugIdentifierDialog";

export const DrugIdentifier = () => {
  const inputFileRef = useRef(null);
  const [drugsIdentify, { data, isLoading }] = useDrugsIdentifyMutation();

  const [
    ResponseViewerDialog,
    responseViewerDialogProps,
    toggleResponseViewerDialog,
  ] = useDialog();

  const openDialog = useCallback(() => {
    toggleResponseViewerDialog(true);
  }, [toggleResponseViewerDialog]);

  const closeDialog = useCallback(() => {
    toggleResponseViewerDialog(false);
  }, [toggleResponseViewerDialog]);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const image = event?.target?.files?.[0];
    const response = await drugsIdentify({ image });

    if ("data" in response) {
      openDialog();
    } else {
      console.error("Error in response", response.error);
    }
  };

  if (isLoading) return <LoadingScreen />;

  return (
    <Container>
      <ResponseViewerDialog {...responseViewerDialogProps} closeButton={true}>
        <DrugIdentifierDialog
          data={data as DrugsIdentify}
          closeDialog={closeDialog}
        />
      </ResponseViewerDialog>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        capture={true}
        style={{ display: "none" }}
        ref={inputFileRef}
        onChange={handleFileUpload}
      />
      <OpenText htmlFor="file-upload">Deschide</OpenText>
    </Container>
  );
};
