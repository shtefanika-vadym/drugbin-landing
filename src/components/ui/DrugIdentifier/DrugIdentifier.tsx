import { DrugsIdentify } from "@/types/drugsIdentify.types";
import { useCallback, useRef } from "react";
import { useDrugsIdentify } from "src/hooks/identify";
import useDialog from "src/hooks/useDialog";
import { LoadingScreen } from "../LoadingScreen/LoadingScreen";
import { Container, OpenText } from "./DrugIdentifier.styled";
import { DrugIdentifierDialog } from "./DrugIdentifierDialog";

export const DrugIdentifier = () => {
  const inputFileRef = useRef(null);
  const { data, isLoading, drugsIdentify } = useDrugsIdentify();

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
    await drugsIdentify({ image }, openDialog);
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
