import styled from 'styled-components';
import { textVariant } from 'styles/mixins/typography.mixin';

export const CameraLoading = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: red;
`;

export const CameraOpen = styled.p`
  ${textVariant('bodyXS')};
  color: #2949a6;
`;
