import { flex } from "src/styles/mixins/flex.mixin";
import { textVariant } from "src/styles/mixins/typography.mixin";
import {
  BREAKPOINTS,
  WDS_COLOR_BLUE_100,
  WDS_COLOR_PRIMARY_100,
  WDS_SIZE_012_PX,
  WDS_SIZE_032_PX,
  WDS_SIZE_040_PX,
  WDS_SIZE_056_PX,
  WDS_SIZE_080_PX,
  WDS_TEXT_WEIGHT_DEMI,
  WDS_TEXT_WEIGHT_REGULAR,
} from "src/styles/tokens";
import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: ${WDS_SIZE_080_PX} 0;

  @media ${BREAKPOINTS.MOBILE_UP_TO} {
    margin: ${WDS_SIZE_056_PX} 0;
  }
`;

export const TopLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  margin: 0 auto;

  @media ${BREAKPOINTS.MOBILE_UP_TO} {
    width: 100%;
    grid-template-columns: 1fr;
    row-gap: ${WDS_SIZE_032_PX};
  }
`;

export const TopContent = styled.div<{
  position: "flex-end" | "center" | "flex-start";
  gap?: string;
}>`
  ${({ position, gap }) =>
    flex({ justifyContent: position, gap: gap, alignItems: "center" })};

  @media ${BREAKPOINTS.MOBILE_UP_TO} {
    ${flex({ justifyContent: "flex-start", gap: WDS_SIZE_012_PX })};
    flex-wrap: wrap;
  }

  & a {
    ${flex({ alignItems: "center" })}
  }
`;

export const BottomContent = styled.div`
  ${flex({
    justifyContent: "center",
    alignContent: "center",
    gap: WDS_SIZE_012_PX,
  })};
  flex-wrap: wrap;
`;

export const NavLink = styled.a<{ light?: boolean }>`
  cursor: pointer;
  ${({ light }) => css`
    text-decoration: ${light ? "underline" : "none"};
    ${light ? textVariant("bodyXS") : textVariant("bodyS")};
    font-weight: ${light ? WDS_TEXT_WEIGHT_REGULAR : WDS_TEXT_WEIGHT_DEMI};
    color: ${WDS_COLOR_BLUE_100};
  `}
`;

export const Border = styled.div`
  width: 100%;
  border-top: 1px solid ${WDS_COLOR_PRIMARY_100};
  margin: ${WDS_SIZE_080_PX} 0 ${WDS_SIZE_040_PX} 0;

  @media ${BREAKPOINTS.MOBILE_UP_TO} {
    margin: ${WDS_SIZE_032_PX} 0;
  }
`;
