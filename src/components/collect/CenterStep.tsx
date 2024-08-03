import { CenterDetails } from "@/types/drug.types";
import { ErrorMessage } from "@hookform/error-message";
import { useCallback, useContext } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { useCitiesQuery } from "src/api/drug";
import { useCenter } from "src/hooks/useCenter";
import { useCurrentLocation } from "src/hooks/useCurrentLocation";
import { MultipleFormContext } from "src/hooks/useMultipleForm";
import { Button } from "../ui/Button/Button";
import { CenterCard } from "../ui/CenterCard/CenterCard";
import { Dropdown } from "../ui/Dropdown";
import { Loader } from "../ui/Loader";
import { ToastType, notify } from "../ui/Toast/CustomToast";
import { ValidationMessage } from "../ui/ValidationMessage/ValidationMessage";
import { Container, DropdownWrapper } from "./CenterStep.styled";
import { CenterStepSkeleton } from "./CenterStepSkeleton";
import { ButtonContainer } from "./Collect.styled";

export const CenterStep = () => {
  const { nextStep, prevStep } = useContext(MultipleFormContext);
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useFormContext();

  const watchedCenter = useWatch({
    control,
    name: "center",
  });

  const {
    verifyLocationAccess,
    location,
    isLocationValid,
    isLoading: isLocationLoading,
  } = useCurrentLocation();
  const { data: cities } = useCitiesQuery("");
  const { centers, isLoading } = useCenter({
    city: watchedCenter?.centerCity,
    isLocationValid,
    location,
  });

  const handleChangeCenter = useCallback(
    (centerID: number | null) => {
      setValue("center.centerID", centerID);
    },
    [setValue]
  );

  const handleChangeCities = useCallback(
    (city: string) => {
      setValue("center.centerCity", city);
      handleChangeCenter(null);
    },
    [setValue, handleChangeCenter]
  );

  const onSubmit = useCallback(() => {
    if (!watchedCenter.centerID) {
      notify(
        "Te rugăm să selectezi un centru de colectare înainte de a continua.",
        ToastType.ERROR
      );
    } else {
      nextStep();
    }
  }, [nextStep, watchedCenter.centerID]);

  const handleCurrentLocation = async () => {
    await verifyLocationAccess();
    setValue("center.centerCity", null);
    handleChangeCenter(null);
  };

  const renderCenterCard = () => {
    if (isLoading || isLocationLoading) {
      return <CenterStepSkeleton />;
    }

    return (
      <>
        {centers?.map((item: CenterDetails) => {
          return (
            <CenterCard
              key={item?.id}
              name={item?.name}
              latitude={item?.lat}
              longitude={item?.lng}
              street={item?.fullAddress}
              schedule={item?.schedule}
              handleSelect={() => handleChangeCenter(item.id)}
              isActive={watchedCenter.centerID === item?.id}
            />
          );
        })}
      </>
    );
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <DropdownWrapper>
        <Dropdown
          name="pack"
          placeholder="EX: Suceava"
          label="Selectează județul *"
          selectedOptions={watchedCenter.centerCity}
          options={cities}
          callbackOnChange={handleChangeCities}
        />
      </DropdownWrapper>
      <Button
        variant="secondary"
        type="button"
        disabled={isLocationLoading}
        onClick={handleCurrentLocation}
      >
        <Loader isLoading={isLocationLoading} size={14} justify="center">
          Găsește locația cea mai apropiată
        </Loader>
      </Button>
      {renderCenterCard()}
      <ErrorMessage
        errors={errors}
        name={"center"}
        render={({ message }) => (
          <ValidationMessage>{message}</ValidationMessage>
        )}
      />
      <ButtonContainer>
        <Button variant="secondary" onClick={prevStep}>
          Înapoi
        </Button>
        <Button type="submit">Selectează</Button>
      </ButtonContainer>
    </Container>
  );
};
