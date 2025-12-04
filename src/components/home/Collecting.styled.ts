import { flex } from "src/styles/mixins/flex.mixin";
import { WDS_SIZE_024_PX, WDS_SIZE_032_PX } from "src/styles/tokens";
import styled from "styled-components";

export const TextContainer = styled.div`
  ${flex({
    direction: "column",
    gap: WDS_SIZE_024_PX,
    justifyContent: "center",
    alignItems: "center",
  })}
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: ${WDS_SIZE_032_PX};
`;
