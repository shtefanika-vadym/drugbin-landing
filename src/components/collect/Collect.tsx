import { useGoogleAnalytics } from 'common/analytics/googleAnalyticsInstance';
import { useRecycleDrugMutation } from 'common/api/recycleApi';
import { STEP_1, STEP_2, STEP_3, STEP_4 } from 'common/constants/steps';
import { useCollectState } from 'common/hooks/useCollectState';
import { DrugInformation } from 'common/ui/DrugInformation/DrugInformation';
import { LocationInformation } from 'common/ui/LocationInformation/LocationInformation';
import { MultiStep } from 'common/ui/MultiStep';
import { PersonalInfromation } from 'common/ui/PersonalInfromation/PersonalInfromation';
import { usePersonalFormValidation } from 'common/ui/PersonalInfromation/personalFormValidation';
import { Signature } from 'common/ui/Signature';
import { Stepper } from 'common/ui/Stepper';
import { toCollectDrugs } from 'common/utils/mappers';
import { gt, isNumber } from 'lodash-es';
import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Content } from './Collect.styled';

export const Collect = () => {
  const navigate = useNavigate();
  const { trackButtonClick } = useGoogleAnalytics();
  const [recycleDrug, { isLoading }] = useRecycleDrugMutation();
  const {
    drugList,
    personalDetails,
    hospitalId,
    activeStep,
    setActiveStep,
    reset,
  } = useCollectState();
  const validations = usePersonalFormValidation(personalDetails);

  const isHospitalValid = isNumber(hospitalId);
  const isLastDrugValid = useMemo(() => {
    const lastDrugIndex = drugList?.length - 1;
    return (
      drugList[lastDrugIndex]?.drugName?.name !== '' &&
      gt(drugList[lastDrugIndex]?.quantity, 0)
    );
  }, [drugList]);
  const isPsycholeptic = useMemo(
    () => drugList.some((drug) => drug.drugName.isPsycholeptic),
    [drugList]
  );

  const handleNextStep = useCallback(() => {
    setActiveStep(activeStep + 1);
  }, [activeStep, setActiveStep]);

  const handlePrevStep = useCallback(() => {
    setActiveStep(activeStep - 1);
  }, [activeStep, setActiveStep]);

  const handleFinishCollect = useCallback(async () => {
    trackButtonClick('Submit');
    const respone = await recycleDrug(
      toCollectDrugs(personalDetails, drugList, hospitalId)
    );
    navigate(respone.data);
    reset();
  }, [
    drugList,
    hospitalId,
    navigate,
    personalDetails,
    recycleDrug,
    reset,
    trackButtonClick,
  ]);

  const isPersonalInfoValid = useMemo(() => {
    const { firstName, lastName, cnp, address } = validations;
    const basicInfoValid = firstName.isValid && lastName.isValid;

    if (isPsycholeptic) {
      return basicInfoValid && cnp.isValid && address.isValid;
    }

    return basicInfoValid;
  }, [validations, isPsycholeptic]);

  const collectStep = useMemo(() => {
    switch (activeStep) {
      case 1:
        return {
          title: STEP_1.TITLE,
          description: STEP_1.DESCRIPTION,
          component: () => (
            <DrugInformation isLastDrugValid={isLastDrugValid} />
          ),
          onNext: handleNextStep,
          nextDisabled: !isLastDrugValid,
          backDisabled: true,
        };
      case 2:
        return {
          title: STEP_2.TITLE,
          description: STEP_2.DESCRIPTION,
          component: () => (
            <PersonalInfromation isPsycholeptic={isPsycholeptic} />
          ),
          onNext: handleNextStep,
          nextDisabled: !isPersonalInfoValid,
        };
      case 3:
        return {
          title: STEP_3.TITLE,
          description: STEP_3.DESCRIPTION,
          component: () => <LocationInformation />,
          onNext: handleNextStep,
          nextDisabled: !isHospitalValid,
        };
      case 4:
        return {
          title: STEP_4.TITLE,
          component: () => <Signature />,
          onNext: handleFinishCollect,
        };
    }
  }, [activeStep, handleFinishCollect, handleNextStep, isHospitalValid, isLastDrugValid, isPersonalInfoValid, isPsycholeptic]);

  return (
    <Content>
      {!gt(activeStep, 3) && <MultiStep activeStep={activeStep} />}
      <Stepper
        title={collectStep?.title}
        description={collectStep?.description}
        onNext={collectStep?.onNext}
        onBack={handlePrevStep}
        nextDisabled={collectStep?.nextDisabled}
        backDisabled={collectStep?.backDisabled}
        isLoading={isLoading}
      >
        {collectStep?.component && collectStep.component()}
      </Stepper>
    </Content>
  );
};
