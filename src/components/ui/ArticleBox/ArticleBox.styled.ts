import { flex } from "src/styles/mixins/flex.mixin";
import {
  WDS_SIZE_032_PX,
  WDS_SIZE_064_PX,
  WDS_SIZE_256_PX,
} from "src/styles/tokens";
import styled, { css } from "styled-components";
import { Text } from "../Text/Text";

const ellipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const Container = styled.div`
  ${flex({ direction: "column", gap: WDS_SIZE_032_PX })};
  text-align: center;
`;

export const Title = styled(Text).attrs({
  variant: "titleS",
})`
  height: ${WDS_SIZE_064_PX};
  ${ellipsis}
`;

export const Description = styled(Text).attrs({
  variant: "bodyS",
})`
  ${ellipsis}
`;

export const Image = styled.img`
  height: ${WDS_SIZE_256_PX};
  width: 100%;
`;
