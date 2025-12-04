import { flex } from "src/styles/mixins/flex.mixin";
import { BREAKPOINTS, WDS_SIZE_016_PX, WDS_SIZE_024_PX } from "src/styles/tokens";
import styled from "styled-components";

export const Container = styled.div`
  ${flex({ gap: WDS_SIZE_024_PX, alignItems: "center" })};

  @media ${BREAKPOINTS.TABLET_UP_TO} {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  flex: 1;
  ${flex({ direction: "column", gap: WDS_SIZE_024_PX })};
`;

export const RightContainer = styled.div`
  flex: 1;

  @media ${BREAKPOINTS.TABLET_UP_TO} {
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  ${flex({ direction: "column", gap: WDS_SIZE_016_PX })};
`;
