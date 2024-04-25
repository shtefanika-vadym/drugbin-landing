import { WDS_SIZE_016_PX, WDS_SIZE_032_PX } from "src/styles/tokens";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: ${WDS_SIZE_016_PX};
  grid-row-gap: ${WDS_SIZE_032_PX};
`;
