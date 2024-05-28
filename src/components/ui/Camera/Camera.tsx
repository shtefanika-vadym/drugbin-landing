import { useRef } from "react";
import { useDrugsIdentifyMutation } from "src/api/drug";
import { Container, OpenText } from "./Camera.styled";
import { LoadingScreen } from "../LoadingScreen/LoadingScreen";

export const Camera = () => {
  const inputFileRef = useRef(null);
  const [drugsIdentify, { data, isLoading }] = useDrugsIdentifyMutation();

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
    console.log("data", response);
    // const { data } = response;
    // const formattedResponse = data.map((obj: any) => formatDrugObject(obj));
  };

  if (isLoading) return <LoadingScreen />;

  return (
    <Container>
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
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Container>
  );
};
