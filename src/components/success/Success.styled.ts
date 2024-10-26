import styled from "styled-components";
import { Text } from "../ui/Text/Text";
import { WDS_SIZE_016_PX, WDS_SIZE_032_PX } from "src/styles/tokens";
import { flex } from "src/styles/mixins/flex.mixin";

export const Container = styled.div`
  width: 100%;
  ${flex({ direction: "column", alignItems: "center", gap: WDS_SIZE_016_PX })}
  margin-top: ${WDS_SIZE_032_PX};
  padding-bottom: 32px;
`;

export const Title = styled(Text).attrs({
  variant: "titleM",
})`
  text-align: center;
`;

export const Description = styled(Text).attrs({
  variant: "bodyS",
})`
  text-align: center;
  width: 90%;
`;
