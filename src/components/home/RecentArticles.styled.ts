import { flex } from "src/styles/mixins/flex.mixin";
import {
  BREAKPOINTS,
  WDS_SIZE_016_PX,
  WDS_SIZE_032_PX,
  WDS_SIZE_048_PX,
} from "src/styles/tokens";
import styled from "styled-components";
import { Container as LayoutContainer } from "src/layout/Layout/Layout.styled";
import { Text } from "../ui/Text/Text";

export const Container = styled(LayoutContainer)`
  ${flex({ direction: "column" })}
`;

export const Title = styled(Text).attrs({
  variant: "titleL",
  element: "h2",
})`
  text-align: center;
  padding-bottom: ${WDS_SIZE_048_PX};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: ${WDS_SIZE_032_PX};

  @media ${BREAKPOINTS.TABLET_UP_TO} {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: ${WDS_SIZE_032_PX};
  }

  @media ${BREAKPOINTS.MOBILE_UP_TO} {
    grid-template-columns: 1fr;
    grid-row-gap: ${WDS_SIZE_016_PX};
  }
`;
