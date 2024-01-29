import { useCollectState } from 'common/hooks/useCollectState';
import type { HeaderProps } from 'common/layout/Header/HeaderWrapper';
import { CloseIcon, LogoIcon } from 'common/ui/Icon/Icon';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ContainerWrapperRecycle,
  Content,
  IconWrapper,
} from './CollectHeader.styled';

export const CollectHeader: React.FC<HeaderProps> = ({ children }) => {
  const navigate = useNavigate();
  const { reset } = useCollectState();

  const handleClose = useCallback(() => {
    reset();
    navigate('/');
  }, [navigate, reset]);

  return (
    <>
      <ContainerWrapperRecycle>
        <div onClick={handleClose}>
          <LogoIcon />
        </div>
        <IconWrapper onClick={handleClose}>
          <CloseIcon />
        </IconWrapper>
      </ContainerWrapperRecycle>
      <Content>{children}</Content>
    </>
  );
};
