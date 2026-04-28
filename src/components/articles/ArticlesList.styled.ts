import styled from "styled-components";
import {
  BREAKPOINTS,
  WDS_COLOR_NEUTRALGREY_200,
  WDS_SIZE_008_PX,
  WDS_SIZE_012_PX,
  WDS_SIZE_016_PX,
  WDS_SIZE_032_PX,
  WDS_SIZE_048_PX,
} from "src/styles/tokens";
import { Text } from "../ui/Text/Text";

export const Container = styled.div`
  margin-top: ${WDS_SIZE_048_PX};
  margin-bottom: ${WDS_SIZE_048_PX};
`;

export const PageTitle = styled(Text).attrs({
  variant: "titleL",
  element: "h1",
})`
  margin-bottom: ${WDS_SIZE_032_PX};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media ${BREAKPOINTS.TABLET_UP_TO} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${BREAKPOINTS.MOBILE_UP_TO} {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${WDS_SIZE_012_PX};
  cursor: pointer;

  &:hover img {
    opacity: 0.9;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  border-radius: ${WDS_SIZE_008_PX};
  aspect-ratio: 16 / 9;
  object-fit: cover;
  transition: opacity 0.2s ease;
`;

export const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${WDS_SIZE_008_PX};
`;

export const CardDate = styled(Text).attrs({
  variant: "bodyXS",
})`
  color: ${WDS_COLOR_NEUTRALGREY_200};
`;

export const CardTitle = styled(Text).attrs({
  variant: "titleXS",
  element: "h2",
})`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardDescription = styled(Text).attrs({
  variant: "bodyXS",
})`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${WDS_COLOR_NEUTRALGREY_200};
  flex: 1;
`;

export const CardFooter = styled.div`
  margin-top: ${WDS_SIZE_016_PX};
`;
