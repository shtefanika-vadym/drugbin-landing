import { flex } from "src/styles/mixins/flex.mixin";
import { grid } from "src/styles/mixins/grid.mixin";
import {
  BREAKPOINTS,
  WDS_SIZE_016_PX,
  WDS_SIZE_024_PX,
  WDS_SIZE_032_PX,
} from "src/styles/tokens";
import styled from "styled-components";
import { Text } from "../Text/Text";

export const Container = styled.div`
  ${grid({ gridTemplateColumns: "1fr 1fr 1fr", columnGap: WDS_SIZE_032_PX })};

  @media ${BREAKPOINTS.TABLET_UP_TO} {
    ${grid({
      gridTemplateColumns: "1fr 1fr",
      columnGap: WDS_SIZE_032_PX,
      rowGap: WDS_SIZE_032_PX,
    })};
  }

  @media ${BREAKPOINTS.MOBILE_UP_TO} {
    ${grid({ gridTemplateColumns: "1fr", rowGap: WDS_SIZE_032_PX })};
  }
`;

export const ContainerBox = styled.div`
  ${flex({ direction: "column" })};
`;

export const Title = styled(Text).attrs({
  variant: "titleM",
  element: "h1",
})`
  padding-top: ${WDS_SIZE_016_PX};
`;

export const Description = styled(Text).attrs({
  variant: "bodyS",
  element: "p",
})`
  padding-top: ${WDS_SIZE_024_PX};
`;
