import { Button } from 'common/ui/Button/Button'
import QRCode from 'react-qr-code'
import {
  BorderCorner,
  ButtonWrapper,
  Description,
  FinishCollectContent,
  QRCodeWrapper,
  Title,
} from './FinishCollect.styled'
import { useNavigate } from 'react-router-dom'
import { Spinner } from '../Spinner/Spinner'

interface QrCodeProps {
  data: { drugCode: string }
  isLoading: boolean
}

export const FinishCollect: React.FC<QrCodeProps> = ({ data, isLoading }) => {
  const navigate = useNavigate()
  if (isLoading) return <Spinner />

  return (
    <FinishCollectContent>
      <Title>Cod QR creat cu succes!</Title>
      <Description>
        Când ajungi la locația aleasă, trebuie să scanezi acest cod QR pentru a finaliza procesul de
        reciclare. <br /> Mulțumim că ai ales să reciclezi medicamentele neutilizate astăzi!
      </Description>
      <QRCodeWrapper>
        {data?.drugCode && (
          <BorderCorner>
            <QRCode id='qrcode' value={data?.drugCode} size={120} />
          </BorderCorner>
        )}
      </QRCodeWrapper>
      <ButtonWrapper>
        <Button variant='primary' onClick={() => navigate('/proces')}>
          Află cum pregătești medicamentele
        </Button>
        <Button variant='secondary'>Salvează în galerie</Button>
      </ButtonWrapper>
    </FinishCollectContent>
  )
}
