import { WDS_SIZE_016_PX, WDS_SIZE_032_PX, WDS_SIZE_048_PX } from "src/styles/tokens";
import styled from "styled-components";
import { Text } from "../ui/Text/Text";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: ${WDS_SIZE_016_PX};
  grid-row-gap: ${WDS_SIZE_032_PX};
`;

export const Title = styled(Text).attrs({
  variant: "titleL",
  element: "h3",
})`
  text-align: center;
  padding-bottom: ${WDS_SIZE_048_PX};
`;
