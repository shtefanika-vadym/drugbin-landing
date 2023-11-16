import { useRecycleDrugMutation } from 'common/api/recycleApi';
import { STEP_1, STEP_2, STEP_3 } from 'common/constants/steps';
import { SET_TO_INITIAL } from 'common/slices/recycleSlice';
import { useAppSelector } from 'common/store/hooks';
import { DrugInformation } from 'common/ui/DrugInformation/DrugInformation';
import { FinishCollect } from 'common/ui/FinishCollect/FinishCollect';
import { LocationInformation } from 'common/ui/LocationInformation/LocationInformation';
import { PersonalInfromation } from 'common/ui/PersonalInfromation/PersonalInfromation';
import { Stepper } from 'common/ui/Stepper';
import { VerbalProcess } from 'common/ui/VerbalProcess/VerbalProcess';
import { toCollectDrugs } from 'common/utils/mappers';
import { useCallback, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { RecycleWrapper } from './Collect.styled';

export const Collect = () => {
  const dispatch = useDispatch();
  const [recycleDrug, { data, isLoading }] = useRecycleDrugMutation();
  const { collectData } = useAppSelector((state) => state.recycleReducer);
  const [activeStep, setActiveStep] = useState<number>(1);

  const handleFinishCollect = useCallback(() => {
    recycleDrug(toCollectDrugs(collectData));
    setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
    dispatch(SET_TO_INITIAL());
  }, [collectData, dispatch, recycleDrug]);

  const recycleSteps = useMemo(() => {
    switch (activeStep) {
      case 1:
        return (
          <Stepper
            title={STEP_1.TITLE}
            tag={STEP_1.TAG}
            activeStep={activeStep}
          >
            <DrugInformation setActiveStep={setActiveStep} />
          </Stepper>
        );
      case 2:
        return (
          <Stepper
            title={STEP_2.TITLE}
            description={STEP_2.DESCRIPTION}
            tag={STEP_2.TAG}
            activeStep={activeStep}
          >
            <PersonalInfromation setActiveStep={setActiveStep} />
          </Stepper>
        );
      case 3:
        return (
          <Stepper
            title={STEP_3.TITLE}
            tag={STEP_3.TAG}
            activeStep={activeStep}
          >
            <LocationInformation setActiveStep={setActiveStep} />
          </Stepper>
        );
      case 4:
        return (
          <VerbalProcess
            setActiveStep={setActiveStep}
            handleFinishCollect={handleFinishCollect}
          />
        );
      case 5:
        return <FinishCollect data={data} isLoading={isLoading} />;
      default:
        return null;
    }
  }, [activeStep, data, handleFinishCollect, isLoading]);

  return <RecycleWrapper>{recycleSteps}</RecycleWrapper>;
};
