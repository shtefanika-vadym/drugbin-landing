import { useRecycleDrugMutation } from 'common/api/recycleApi'
import { Title, Text, QRCodeWrapper, BorderCorner } from './QrCode.styled'
import { useEffect } from 'react'
import QRCode from 'react-qr-code'
import Spinner from 'common/ui/Spinner/Spinner'
import { Button } from 'common/ui/Button/Button'

export const QrCode = ({ drugs }: any) => {
  const [recycleDrug, { isLoading, data }] = useRecycleDrugMutation()

  useEffect(() => {
    if (drugs) recycleDrug(drugs)
  }, [drugs])

  return (
    <div>
      <Title>QR Code Created</Title>
      <Text>
        When you get to the chosen location, you have to scan this QR Code to finish the recycling
        process. Thank you for choosing to recycle your unused medication today!
      </Text>
      <QRCodeWrapper>
        {isLoading ? (
          <Spinner isLoading={isLoading} />
        ) : (
          <>
            {data?.drugCode && (
              <BorderCorner>
                <QRCode id='qrcode' value={data?.drugCode} size={120} />
              </BorderCorner>
            )}
          </>
        )}
        <Button variant='secondary'>Save as photo</Button>
      </QRCodeWrapper>
    </div>
  )
}
