import { border } from 'src/styles/mixins/border.mixin';
import { flex } from 'src/styles/mixins/flex.mixin';
import {
    WDS_COLOR_NEUTRALGREY_50,
    WDS_COLOR_PRIMARY_50,
    WDS_SIZE_008_PX,
    WDS_SIZE_012_PX,
    WDS_SIZE_040_PX,
} from 'src/styles/tokens';
import styled from 'styled-components';

export const Container = styled.div`
  ${flex({ gap: WDS_SIZE_008_PX, alignItems: 'center' })};
`;

export const Dot = styled.div<{ active: boolean }>`
  height: ${WDS_SIZE_012_PX};
  width: ${WDS_SIZE_012_PX};
  background-color: transparent;
  border-radius: 50%;
  ${({ active }) =>
    !active && border({ inside: true, color: WDS_COLOR_NEUTRALGREY_50 })};
  background-color: ${({ active }) => active && WDS_COLOR_PRIMARY_50};
`;

export const Line = styled.div`
  width: ${WDS_SIZE_040_PX};
  border-bottom: 1px solid ${WDS_COLOR_NEUTRALGREY_50};
`;
