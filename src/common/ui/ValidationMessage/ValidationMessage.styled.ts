import styled from "styled-components";
import { WDS_COLOR_RED } from "styles/colors";
import { flex } from "styles/mixins/flex.mixin";
import { textVariant } from "styles/mixins/typography.mixin";
import { WDS_SIZE_004_PX, WDS_SIZE_006_PX } from "styles/size";

export const Container = styled.p`
  ${flex({ alignItems: 'center', gap: WDS_SIZE_006_PX })};
  ${textVariant('bodyXS')};
  padding-top: ${WDS_SIZE_004_PX};
  color: ${WDS_COLOR_RED};
`;