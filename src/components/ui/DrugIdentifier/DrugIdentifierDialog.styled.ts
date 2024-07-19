import { flex } from "src/styles/mixins/flex.mixin";
import { textVariant } from "src/styles/mixins/typography.mixin";
import {
  WDS_COLOR_BLUE_100,
  WDS_COLOR_NEUTRAL_WHITE,
  WDS_COLOR_PRIMARY_50,
  WDS_SIZE_008_PX,
  WDS_SIZE_010_PX,
  WDS_SIZE_012_PX,
  WDS_SIZE_024_PX
} from "src/styles/tokens";
import styled from "styled-components";
import { Text } from "../Text/Text";

export const Container = styled.div`
  ${flex({ direction: "column", gap: "24px" })};
`;

export const Title = styled(Text).attrs({
  variant: "titleS",
})`
  text-align: center;
`;

export const Description = styled(Text).attrs({
  variant: "bodyS",
})`
  line-height: 16px;
`;

export const ButtonWrapper = styled.div`
  ${flex({ justifyContent: "space-between" })}
`;

export const DrugIdentifierWrapper = styled.div`
  ${flex({ direction: "column", gap: WDS_SIZE_012_PX })};
`;

export const Count = styled(Text).attrs({
  variant: "bodyInfo",
  color: WDS_COLOR_BLUE_100,
})`
  text-align: right;
`;

export const RetryLabel = styled.label`
  width: 100%;
  color: ${WDS_COLOR_NEUTRAL_WHITE};
  background-color: ${WDS_COLOR_PRIMARY_50};
  padding: ${WDS_SIZE_010_PX} ${WDS_SIZE_024_PX};
  border-radius: ${WDS_SIZE_008_PX};
  ${textVariant("bodyS")};
`;
