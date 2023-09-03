import closeIcon from 'common/assets/close.svg'
import logoS from 'common/assets/logo-s.svg'
import type { HeaderProps } from 'common/layout/Header/HeaderWrapper'
import { useNavigate } from 'react-router-dom'
import { ContainerWrapperRecycle, Content, Icon } from './CollectHeader.styled'

export const CollectHeader: React.FC<HeaderProps> = ({ children }) => {
  const navigate = useNavigate()
  return (
    <>
      <ContainerWrapperRecycle>
        <Icon src={logoS} />
        <Icon src={closeIcon} onClick={() => navigate('/')} />
      </ContainerWrapperRecycle>
      <Content>{children}</Content>
    </>
  )
}
