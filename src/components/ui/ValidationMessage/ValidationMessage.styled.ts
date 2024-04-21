import {
  WDS_COLOR_ERROR_50,
  WDS_SIZE_004_PX,
  WDS_SIZE_006_PX,
} from "src/styles/tokens";
import { flex } from "src/styles/mixins/flex.mixin";
import { textVariant } from "src/styles/mixins/typography.mixin";
import styled from "styled-components";

export const Container = styled.div`
  ${flex({ alignItems: "center", gap: WDS_SIZE_006_PX })};
  ${textVariant("bodyXS")};
  padding-top: ${WDS_SIZE_004_PX};
  color: ${WDS_COLOR_ERROR_50};
`;
