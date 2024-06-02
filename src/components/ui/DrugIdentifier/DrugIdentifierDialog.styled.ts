import { flex } from "src/styles/mixins/flex.mixin";
import styled from "styled-components";
import { Text } from "../Text/Text";
import { WDS_COLOR_BLUE_100, WDS_SIZE_012_PX } from "src/styles/tokens";

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
   ${flex({ direction: 'column', gap: WDS_SIZE_012_PX })};
`

export const Count = styled(Text).attrs({
  variant: 'bodyInfo',
  color: WDS_COLOR_BLUE_100
})`
  text-align: right;
`
