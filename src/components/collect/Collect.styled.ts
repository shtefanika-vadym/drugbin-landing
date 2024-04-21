import { flex } from "src/styles/mixins/flex.mixin";
import { Layout } from "src/layout/Layout/Layout";
import styled from "styled-components";
import { WDS_SIZE_032_PX } from "src/styles/tokens";

export const Container = styled(Layout)`
  min-height: 100vh;
`;

export const InputContainer = styled.div``;

export const ButtonContainer = styled.div`
  ${flex({ justifyContent: "space-between" })};
  margin-top: ${WDS_SIZE_032_PX};
`;
