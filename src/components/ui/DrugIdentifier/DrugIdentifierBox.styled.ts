import { border } from "src/styles/mixins/border.mixin";
import { flex } from "src/styles/mixins/flex.mixin";
import { grid } from "src/styles/mixins/grid.mixin";
import {
  WDS_COLOR_NEUTRALGREY_100,
  WDS_COLOR_NEUTRALGREY_200,
  WDS_SIZE_001_PX,
  WDS_SIZE_016_PX
} from "src/styles/tokens";
import styled from "styled-components";
import { Text } from "../Text/Text";

export const Container = styled.div`
  ${flex({ direction: "column" })};
  padding: ${WDS_SIZE_016_PX};
  ${border({ color: WDS_COLOR_NEUTRALGREY_100 })};
`;

export const Row = styled.div<{ columns?: number }>`
  ${({ columns = 2 }) => grid({ gridTemplateColumns: `repeat(${columns}, 1fr)` })};
`;

export const DataContainer = styled.div`
  ${flex({ direction: "column" })};
`;

export const Description = styled(Text).attrs({ variant: "bodyS" })`
  line-height: ${WDS_SIZE_016_PX};
  color: ${WDS_COLOR_NEUTRALGREY_200};
`;

export const Divider = styled.div`
  width: 100%;
  height: ${WDS_SIZE_001_PX};
  background-color: ${WDS_COLOR_NEUTRALGREY_100};
  margin: ${WDS_SIZE_016_PX} 0;
`;

