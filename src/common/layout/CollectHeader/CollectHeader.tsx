import closeIcon from 'common/assets/close.svg'
import logoS from 'common/assets/logo-s.svg'
import type { HeaderProps } from 'common/layout/Header/HeaderWrapper'
import { SET_TO_INITIAL } from 'common/slices/recycleSlice'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ContainerWrapperRecycle, Content, Icon } from './CollectHeader.styled'

export const CollectHeader: React.FC<HeaderProps> = ({ children }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClose = useCallback(() => {
    dispatch(SET_TO_INITIAL())
    navigate('/')
  }, [])

  return (
    <>
      <ContainerWrapperRecycle>
        <Icon src={logoS} />
        <Icon src={closeIcon} onClick={handleClose} />
      </ContainerWrapperRecycle>
      <Content>{children}</Content>
    </>
  )
}
