import { flex } from "src/styles/mixins/flex.mixin";
import { WDS_SIZE_016_PX } from "src/styles/tokens";
import styled from "styled-components";
import { Text } from "../ui/Text/Text";

export const Container = styled.div`
  width: 100%;
  ${flex({ direction: "column", gap: WDS_SIZE_016_PX })};
`;

export const PrivacyPolicy = styled.div`
  height: 40vh;
  overflow-y: auto;
  box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.2);
`;

export const Consent = styled(Text).attrs({
  variant: "bodyS",
})`
  font-weight: bold;
  padding-top: ${WDS_SIZE_016_PX};
`;
