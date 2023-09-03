import { STEP_1, STEP_2, STEP_3 } from 'common/constants/steps'
import { useAppSelector } from 'common/store/hooks'
import { DrugInformation } from 'common/ui/DrugInformation/DrugInformation'
import { LocationInformation } from 'common/ui/LocationInformation/LocationInformation'
import { PersonalInfromation } from 'common/ui/PersonalInfromation/PersonalInfromation'
import { QrCode } from 'common/ui/QrCode/QrCode'
import { Stepper } from 'common/ui/Stepper/Stepper'
import { VerbalProcess } from 'common/ui/VerbalProcess/VerbalProcess'
import { useMemo, useState } from 'react'
import { RecycleWrapper } from './Collect.styled'

export const Collect = () => {
  const [activeStep, setActiveStep] = useState<number>(1)
  const { collectData } = useAppSelector((state) => state.recycleReducer)

  // MOVE THIS IN API CALL
  const transformData = (data: any) => {
    const transformedData = { ...data }
    transformedData.drugList = transformedData.drugList.map((drug: any) => {
      const { drugName, pack, quantity, ...rest } = drug
      return {
        drugId: Number(drugName.drugId),
        pack: pack.toLowerCase(),
        quantity: Number(quantity),
        ...rest,
      }
    })
    return transformedData
  }

  const data = transformData(collectData)

  const recycleSteps = useMemo(() => {
    switch (activeStep) {
      case 1:
        return (
          <Stepper
            title={STEP_1.TITLE}
            description={STEP_1.DESCRIPTION}
            tag={STEP_1.TAG}
            activeStep={activeStep}>
            <PersonalInfromation setActiveStep={setActiveStep} />
          </Stepper>
        )
      case 2:
        return (
          <Stepper title={STEP_2.TITLE} tag={STEP_2.TAG} activeStep={activeStep}>
            <DrugInformation setActiveStep={setActiveStep} />
          </Stepper>
        )
      case 3:
        return (
          <Stepper title={STEP_3.TITLE} tag={STEP_3.TAG} activeStep={activeStep}>
            <LocationInformation setActiveStep={setActiveStep} />
          </Stepper>
        )
      case 4:
        return <VerbalProcess setActiveStep={setActiveStep} />
      case 5:
        return <QrCode drugs={data} />
      default:
        return '0'
    }
  }, [activeStep])

  return <RecycleWrapper>{recycleSteps}</RecycleWrapper>
}
