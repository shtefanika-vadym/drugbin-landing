import { flex } from "src/styles/mixins/flex.mixin";
import { WDS_SIZE_016_PX } from "src/styles/tokens";
import styled from "styled-components";

export const Container = styled.form`
  ${flex({ direction: "column", gap: WDS_SIZE_016_PX })};
  width: 100%;
`;
