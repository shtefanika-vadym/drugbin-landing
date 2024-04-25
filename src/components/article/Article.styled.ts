import {
  BREAKPOINTS,
  WDS_TEXT_FAMILY_BASE,
  WDS_TEXT_WEIGHT_MEDIUM,
  WDS_TEXT_WEIGHT_REGULAR,
} from "src/styles/tokens";
import styled from "styled-components";
import { Text } from "../ui/Text/Text";

export const Container = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  grid-column-gap: 32px;
  grid-template-areas:
    "img more"
    "article more";

  @media ${BREAKPOINTS.MOBILE_UP_TO} {
    grid-template-columns: 1fr;
    grid-template-areas:
      "img"
      "article"
      "more";
  }

  & li,
  p,
  h2,
  strong,
  a {
    font-family: ${WDS_TEXT_FAMILY_BASE};
    size: "18px";
    line-height: "20px";
    font-weight: ${WDS_TEXT_WEIGHT_REGULAR};
    letter-spacing: "normal";
    text-transform: "none";
    padding: 4px;
    text-decoration: none;
  }

  & strong,
  h2 {
    font-weight: ${WDS_TEXT_WEIGHT_MEDIUM};
  }

  & a {
    color: #464797;
    font-weight: ${WDS_TEXT_WEIGHT_MEDIUM};
  }
`;

export const Title = styled(Text).attrs({
  variant: "titleM",
  element: "h1",
})`
  padding-top: 32px;
  max-width: 800px;
`;

export const Image = styled.img`
  grid-area: img;

  width: 100%;
`;

export const RightSection = styled.div`
  grid-area: more;
`;

export const LeftSection = styled.div`
  grid-area: article;
`;
