import { flex } from "src/styles/mixins/flex.mixin";
import {
    WDS_SIZE_016_PX,
    WDS_SIZE_024_PX
} from "src/styles/tokens";
import styled from "styled-components";

export const Container = styled.div<{ backgroundColor: string }>`
  ${flex({
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: WDS_SIZE_024_PX,
  })};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${WDS_SIZE_016_PX};
  padding: ${WDS_SIZE_024_PX};
`;

export const TextContainer = styled.div`
  ${flex({
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: WDS_SIZE_024_PX,
  })};
  max-width: 850px;
  text-align: center;
`;
