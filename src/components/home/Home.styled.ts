import { flex } from "src/styles/mixins/flex.mixin";
import {
  BREAKPOINTS,
  WDS_SIZE_064_PX,
  WDS_SIZE_144_PX,
} from "src/styles/tokens";
import styled from "styled-components";

export const Container = styled.div`
  ${flex({ direction: "column", gap: WDS_SIZE_144_PX })}

  @media ${BREAKPOINTS.MOBILE_UP_TO} {
    ${flex({ direction: "column", gap: WDS_SIZE_064_PX })}
  }
`;
