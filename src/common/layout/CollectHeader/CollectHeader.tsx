import type { HeaderProps } from 'common/layout/Header/HeaderWrapper';
import { SET_TO_INITIAL } from 'common/slices/recycleSlice';
import { CloseIcon, LogoIcon } from 'common/ui/Icon/Icon';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  ContainerWrapperRecycle,
  Content,
  IconWrapper,
} from './CollectHeader.styled';

export const CollectHeader: React.FC<HeaderProps> = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClose = useCallback(() => {
    dispatch(SET_TO_INITIAL());
    navigate('/');
  }, [dispatch, navigate]);

  return (
    <>
      <ContainerWrapperRecycle>
        <LogoIcon />
        <IconWrapper onClick={handleClose}>
          <CloseIcon />
        </IconWrapper>
      </ContainerWrapperRecycle>
      <Content>{children}</Content>
    </>
  );
};
