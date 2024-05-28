import {
  WDS_COLOR_PRIMARY_50,
  WDS_TEXT_FAMILY_BASE,
  WDS_TEXT_WEIGHT_REGULAR,
} from "src/styles/tokens";
import styled from "styled-components";

export const Container = styled.div``;

export const OpenText = styled.label`
  color: ${WDS_COLOR_PRIMARY_50};
  font-family: ${WDS_TEXT_FAMILY_BASE};
  font-weight: ${WDS_TEXT_WEIGHT_REGULAR};
  font-size: 12px;
  line-height: 16px;
  cursor: pointer;
  padding: 0;
`;
