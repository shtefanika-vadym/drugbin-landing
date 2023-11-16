import { LocationProps } from '@/types/Location'
import { usePharmasDetailsQuery } from 'common/api/recycleApi'
import { SET_PHARMA } from 'common/slices/recycleSlice'
import { useAppDispatch, useAppSelector } from 'common/store/hooks'
import { Button } from 'common/ui/Button/Button'
import { PharmaCard } from 'common/ui/PharmaCard/PharmaCard'
import type { FC } from 'react'
import { useCallback } from 'react'
import { Spinner } from '../Spinner/Spinner'
import { ButtonWrapper, LocationInformationWrapper } from './LocationInformation.styled'

interface LocationInformationProps {
  setActiveStep: (step: (prevActiveStep: number) => number) => void
}

export const LocationInformation: FC<LocationInformationProps> = ({ setActiveStep }) => {
  const dispatch = useAppDispatch()
  const { data, isLoading } = usePharmasDetailsQuery()
  const { collectData } = useAppSelector((state) => state.recycleReducer)

  const hanldeSubmit = useCallback(() => {
    setActiveStep((prevActiveStep: number) => prevActiveStep + 1)
  }, [setActiveStep])

  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1)
  }, [setActiveStep])

  const selectPharma = useCallback((id: number) => {
    dispatch(SET_PHARMA(id))
  }, [dispatch])

  if (isLoading) return <Spinner />

  return (
    <LocationInformationWrapper>
      {data?.map((item: LocationProps) => {
        return (
          <PharmaCard
            key={item?.id}
            name={item?.name}
            handleSelect={() => selectPharma(item?.id)}
            isActive={collectData?.chainId === item?.id}
          />
        )
      })}
      <ButtonWrapper>
        <Button variant='empty' onClick={handleBack}>
          Înapoi
        </Button>
        <Button onClick={hanldeSubmit}>Selectează</Button>
      </ButtonWrapper>
    </LocationInformationWrapper>
  )
}
