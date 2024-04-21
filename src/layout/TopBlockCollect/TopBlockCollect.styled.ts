import { Logo_XS_Icon } from "src/components/ui/Icon";
import { flex } from "src/styles/mixins/flex.mixin";
import {
  BREAKPOINTS,
  WDS_BREAKPOINT_DESKTOP_M,
  WDS_COLOR_NEUTRAL_WHITE,
  WDS_COLOR_PRIMARY_100,
  WDS_SIZE_022_PX,
  WDS_SIZE_080_PX,
} from "src/styles/tokens";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${WDS_COLOR_NEUTRAL_WHITE};
  border-bottom: 1px solid ${WDS_COLOR_PRIMARY_100};
`;

export const Navigation = styled.div`
  ${flex({ justifyContent: "space-between", alignItems: "center" })};
  max-width: ${WDS_BREAKPOINT_DESKTOP_M};
  width: 100%;
  padding: ${WDS_SIZE_022_PX} ${WDS_SIZE_080_PX};
  box-sizing: border-box;

  @media ${BREAKPOINTS.TABLET_UP_TO} {
    padding: ${WDS_SIZE_022_PX};
  }
`;

export const LogoXS = styled(Logo_XS_Icon)`
  cursor: pointer;
`;
