import { LogoIcon, Logo_XS_Icon } from "src/components/ui/Icon";
import { flex } from "src/styles/mixins/flex.mixin";
import { grid } from "src/styles/mixins/grid.mixin";
import { textVariant } from "src/styles/mixins/typography.mixin";
import {
  BREAKPOINTS,
  WDS_BREAKPOINT_DESKTOP_M,
  WDS_COLOR_BLUE_100,
  WDS_COLOR_NEUTRAL_WHITE,
  WDS_COLOR_PRIMARY_100,
  WDS_SIZE_016_PX,
  WDS_SIZE_022_PX,
  WDS_SIZE_032_PX,
  WDS_SIZE_048_PX,
  WDS_SIZE_072_PX,
  WDS_SIZE_080_PX,
  WDS_TEXT_WEIGHT_DEMI,
} from "src/styles/tokens";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: ${WDS_SIZE_072_PX};
  background-color: ${WDS_COLOR_NEUTRAL_WHITE};
  border-bottom: 1px solid ${WDS_COLOR_PRIMARY_100};
  ${flex({ alignItems: "center", justifyContent: "center" })};
  padding: 0 auto;

  position: sticky;
  top: 0px;
`;

export const TableContainer = styled.div`
  position: relative;
  ${flex({})};
  width: 100%;

  @media ${BREAKPOINTS.TABLET_UP_TO} {
    padding: ${WDS_SIZE_032_PX} ${WDS_SIZE_048_PX};
  }

  @media ${BREAKPOINTS.MOBILE_UP_TO} {
    padding: ${WDS_SIZE_032_PX} ${WDS_SIZE_016_PX};
  }

  @media ${BREAKPOINTS.DESKTOP_S} {
    display: none;
  }
`;

export const DesktopContainer = styled.div`
  box-sizing: border-box;
  max-width: ${WDS_BREAKPOINT_DESKTOP_M};
  width: 100%;
  padding: ${WDS_SIZE_022_PX} ${WDS_SIZE_080_PX};
  ${grid({ gridTemplateColumns: "2fr 1fr 2fr" })};

  @media ${BREAKPOINTS.TABLET_UP_TO} {
    display: none;
  }
`;

export const NavLink = styled.a`
  ${textVariant("bodyS")};
  font-weight: ${WDS_TEXT_WEIGHT_DEMI};
  color: ${WDS_COLOR_BLUE_100};
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
`;

export const Navigation = styled.div`
  ${flex({ gap: WDS_SIZE_032_PX, alignItems: "center" })};
`;

export const LogoS = styled(LogoIcon)`
  cursor: pointer;
  margin: 0 auto;
`;

export const LogoXS = styled(Logo_XS_Icon)`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
