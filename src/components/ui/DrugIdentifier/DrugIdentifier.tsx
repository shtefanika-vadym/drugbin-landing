import { useCallback, useRef } from "react";
import { useDrugsIdentifyMutation } from "src/api/drug";
import { Container, OpenText } from "./DrugIdentifier.styled";
import { LoadingScreen } from "../LoadingScreen/LoadingScreen";
import useDialog from "src/hooks/useDialog";

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const formatDrugObject = (obj: any) => {
    const formattedObject = {
      drugName: {
        drugId: obj.id,
        name: obj.name,
        value: obj.name,
      },
      pack: "Pack",
      quantity: 1,
      expirationDate: obj?.expirationDate || null,
      lot: obj?.lot || null,
    };

    return formattedObject;
  };

  const handleFileUpload = async (event: any) => {
    const image = event.target.files[0];
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
      <ResponseViewerDialog {...responseViewerDialogProps}>
        <pre>{JSON.stringify(data, null, 2)}</pre>
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
