import { flex } from "src/styles/mixins/flex.mixin";
import {
  BREAKPOINTS,
  WDS_SIZE_016_PX,
  WDS_SIZE_024_PX,
  WDS_SIZE_032_PX,
} from "src/styles/tokens";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1280px;
  margin: 0 auto;

  @media ${BREAKPOINTS.TABLET_UP_TO} {
    grid-template-columns: 1fr;
    row-gap: ${WDS_SIZE_032_PX};
  }
`;

export const LeftSection = styled.div`
  ${flex({
    direction: "column",
    gap: WDS_SIZE_032_PX,
    justifyContent: "center",
  })};
`;

export const Details = styled.div`
  ${flex({ direction: "column", gap: WDS_SIZE_016_PX })}
`;

export const Data = styled.div`
  ${flex({ gap: WDS_SIZE_016_PX, alignItems: "center" })}
`;

export const RightSection = styled.form`
  ${flex({ direction: "column", gap: WDS_SIZE_024_PX })};
`;

export const InputContainer = styled.div``;
