import { flex } from "src/styles/mixins/flex.mixin";
import { WDS_COLOR_BLUE_100, WDS_SIZE_016_PX, WDS_SIZE_650_PX } from "src/styles/tokens";
import styled from "styled-components";
import { Text } from "../Text/Text";

export const Container = styled.div`
  ${flex({
    direction: "column",
    gap: WDS_SIZE_016_PX,
    alignItems: "center",
  })};
  max-width: ${WDS_SIZE_650_PX};
  margin: 0 auto;
`;

export const Title = styled(Text).attrs({
  variant: "titleM",
  element: 'h1'
})`
  text-align: center;
  padding: ${WDS_SIZE_016_PX} 0;
`;

export const Description = styled(Text).attrs({
  variant: "bodyS",
  element: 'p'
})`
  text-align: left;
  padding-top: ${WDS_SIZE_016_PX};
`;

export const Mandatory = styled(Text).attrs({
  variant: "bodyS",
})`
  width: 100%;
  text-align: left;
  color: ${WDS_COLOR_BLUE_100};
`;
