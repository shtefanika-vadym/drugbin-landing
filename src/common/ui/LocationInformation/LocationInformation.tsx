// import { useAppDispatch } from 'common/store/hooks'
import { Button } from 'common/ui/Button/Button'
import type { FC } from 'react'
import { useCallback } from 'react'
import {
  ButtonWrapper,
  Email,
  LocationInformationWrapper,
  Name,
  PharmaCardDetails,
  Description,
} from './LocationInformation.styled'
import { usePharmasDetailsQuery } from 'common/api/recycleApi'
import Spinner from 'common/ui/Spinner/Spinner'
import { SET_PHARMA } from 'common/slices/recycleSlice'
import { useAppDispatch, useAppSelector } from 'common/store/hooks'

interface IProps {
  setActiveStep: (step: any) => void
}

export const LocationInformation: FC<IProps> = ({ setActiveStep }) => {
  const { data, isLoading } = usePharmasDetailsQuery()
  const dispatch = useAppDispatch()
  const { collectData } = useAppSelector((state) => state.recycleReducer)

  const hanldeSubmit = useCallback(() => {
    setActiveStep((prevActiveStep: number) => prevActiveStep + 1)
  }, [])

  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1)
  }, [])

  const selectPharma = useCallback((id: number) => {
    dispatch(SET_PHARMA(id))
  }, [])

  if (isLoading) return <Spinner isLoading={true} />

  return (
    <LocationInformationWrapper>
      {data.map((element: any) => {
        return (
          <PharmaCardDetails
            onClick={() => selectPharma(element.id)}
            key={element.id}
            isActive={collectData.chainId === element.id}>
            <Name>{element.name}</Name>
            <Description>{element.description}</Description>
            <Email>{element.email}</Email>
          </PharmaCardDetails>
        )
      })}
      <ButtonWrapper>
        <Button variant='empty' size='None' onClick={handleBack}>
          Go back
        </Button>
        <Button onClick={hanldeSubmit}>Select and finish</Button>
      </ButtonWrapper>
    </LocationInformationWrapper>
  )
}
