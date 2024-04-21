import { flex } from "src/styles/mixins/flex.mixin";
import {
  WDS_COLOR_BLUE_200,
  WDS_SIZE_008_PX,
  WDS_SIZE_016_PX
} from "src/styles/tokens";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${WDS_COLOR_BLUE_200};
  padding: ${WDS_SIZE_016_PX};
  border-radius: ${WDS_SIZE_008_PX};
  box-sizing: border-box;
  ${flex({ gap: WDS_SIZE_016_PX })};
`;
