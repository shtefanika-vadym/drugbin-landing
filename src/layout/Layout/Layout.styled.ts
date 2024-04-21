import {
  BREAKPOINTS,
  WDS_BREAKPOINT_DESKTOP_M,
  WDS_SIZE_016_PX,
  WDS_SIZE_022_PX,
  WDS_SIZE_032_PX,
  WDS_SIZE_048_PX,
  WDS_SIZE_080_PX,
} from "src/styles/tokens";
import styled from "styled-components";

export const Container = styled.div<{ color?: string; fullWidth?: boolean }>`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ fullWidth }) =>
    fullWidth ? "100%" : WDS_BREAKPOINT_DESKTOP_M};
  background-color: ${({ color }) => color};
  box-sizing: border-box;
  padding: ${WDS_SIZE_022_PX} ${WDS_SIZE_080_PX};

  @media ${BREAKPOINTS.TABLET_UP_TO} {
    padding: ${WDS_SIZE_032_PX} ${WDS_SIZE_048_PX};
  }

  @media ${BREAKPOINTS.MOBILE_UP_TO} {
    padding: ${WDS_SIZE_032_PX} ${WDS_SIZE_016_PX};
  }
`;
