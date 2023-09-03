import mapImg from 'common/assets/MAP.png'
import { SET_SHOW_MODAL } from 'common/slices/modalSlice'
import { useAppDispatch } from 'common/store/hooks'
import { Button } from 'common/ui/Button/Button'
import { Input } from 'common/ui/Input/Input'
import { FinishModal } from 'common/ui/Modal/FinishModal/FinishModal'
import type { ChangeEvent, FC } from 'react'
import { useCallback, useState } from 'react'
import {
  ButtonWrapper,
  Image,
  Location,
  LocationInformationWrapper,
  Name,
  PharmaCardDetails,
  Schedule,
} from './LocationInformation.styled'

interface IProps {
  setActiveStep: (step: any) => void
}

export const LocationInformation: FC<IProps> = ({ setActiveStep }) => {
  const dispatch = useAppDispatch()
  const [search, setSearch] = useState<string>('')

  const handleCloseModal = () => {
    dispatch(SET_SHOW_MODAL({ isOpenModal: false, childModal: null }))
  }

  const handleChange = (values: ChangeEvent<HTMLInputElement>) => {
    const { value } = values.target
    setSearch(value)
  }

  const callbackOnClickFinish = () => {
    dispatch(
      SET_SHOW_MODAL({
        isOpenModal: true,
        childModal: (
          <FinishModal handleCloseModal={handleCloseModal} setActiveStep={setActiveStep} />
        ),
      }),
    )
  }

  const hanldeSubmit = useCallback(() => {
    callbackOnClickFinish()
  }, [])

  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1)
  }, [])

  return (
    <LocationInformationWrapper>
      <Input
        type='search'
        label='Search location/ address'
        value={search}
        onChange={(e) => handleChange(e)}
        placeholder='EX: Tipografiei 1'
      />
      <div>
        <Image src={mapImg} />
        <PharmaCardDetails>
          <Schedule>Mo-Fr 8:00 – 22.00</Schedule>
          <Name>Farmacia Inimii Catena</Name>
          <Location>Tipografiei 1, Suceava, SUCEAVA</Location>
        </PharmaCardDetails>
      </div>
      <ButtonWrapper>
        <Button variant='empty' size='None' onClick={handleBack}>
          Go back
        </Button>
        <Button onClick={hanldeSubmit}>Select and finish</Button>
      </ButtonWrapper>
    </LocationInformationWrapper>
  )
}
