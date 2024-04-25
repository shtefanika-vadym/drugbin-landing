import { flex } from "src/styles/mixins/flex.mixin";
import { WDS_COLOR_NEUTRALGREY_50, WDS_SIZE_012_PX } from "src/styles/tokens";
import styled, { css } from "styled-components";
import { Text } from "../Text/Text";

// TODO: make reusable ellipsis.mixin.ts
const ellipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Container = styled.div`
  ${flex({ direction: "column", gap: WDS_SIZE_012_PX })};

  > *:not(:last-child) {
    border-bottom: 1px solid ${WDS_COLOR_NEUTRALGREY_50};
  }
`;

export const Box = styled.div`
  ${flex({ direction: "column", gap: WDS_SIZE_012_PX })};
  padding-bottom: ${WDS_SIZE_012_PX};
`;

export const ButtonWrapper = styled.div`
  ${flex({ justifyContent: "space-between", alignItems: "center" })};
`;

export const Title = styled(Text).attrs({
  variant: "titleXS",
})`
  ${ellipsis}
`;

export const Description = styled(Text).attrs({
  variant: "bodyXS",
})`
  ${ellipsis}
`;
