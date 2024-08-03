import styled from 'styled-components';
import { LoaderProps } from './Loader';
import { flex } from 'src/styles/mixins/flex.mixin';

type ContainerProps = Pick<LoaderProps, 'justify' | 'spacing' | 'centered'>;

export const Container = styled.div<ContainerProps>`
  ${(props) => props.justify && flex({ justifyContent: props.justify })};
  ${(props) => props.spacing && `padding: ${props.spacing}`}
  ${(props) =>
    props.centered &&
    `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`;

export const StyledLoaderContainer = styled.div`
  display: contents;
`;
