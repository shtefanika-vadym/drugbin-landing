import { flex } from "src/styles/mixins/flex.mixin";
import { BREAKPOINTS, WDS_SIZE_024_PX } from "src/styles/tokens";
import styled from "styled-components";
import { Container as LayoutContainer } from "src/layout/Layout/Layout.styled";

export const Container = styled(LayoutContainer)`
  ${flex({ gap: WDS_SIZE_024_PX })}

  @media ${BREAKPOINTS.MOBILE_UP_TO} {
    ${flex({ direction: "column", gap: WDS_SIZE_024_PX })}
  }
`;

export const ContentLeft = styled.div`
  flex: 1;
`;

export const ContentRight = styled.div`
  flex: 1;
`;
