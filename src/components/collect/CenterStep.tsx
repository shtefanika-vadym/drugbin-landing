import { CenterDetails } from "@/types/drug.types";
import { ErrorMessage } from "@hookform/error-message";
import { useCallback, useContext, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import {
  useCitiesQuery
} from "src/api/drug";
import { useCenter } from "src/hooks/useCenter";
import { useCurrentLocation } from "src/hooks/useCurrentLocation";
import { MultipleFormContext } from "src/hooks/useMultipleForm";
import { Button } from "../ui/Button/Button";
import { CenterCard } from "../ui/CenterCard/CenterCard";
import { Dropdown } from "../ui/Dropdown";
import { ToastType, notify } from "../ui/Toast/CustomToast";
import { ValidationMessage } from "../ui/ValidationMessage/ValidationMessage";
import { Container, DropdownWrapper } from "./CenterStep.styled";
import { ButtonContainer } from "./Collect.styled";

export const CenterStep = () => {
  const [city, setCity] = useState<string>();

  const { nextStep, prevStep } = useContext(MultipleFormContext);
  const { verifyLocationAccess } = useCurrentLocation();
  const { data: cities } = useCitiesQuery("");
  const { centers } = useCenter(city);

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

  const handleChangeCities = useCallback((city: string) => {
    setCity(city);
  }, []);

  const onSubmit = useCallback(() => {
    if (!watchedCenter) {
      notify(
        "Te rugăm să selectezi un centru de colectare înainte de a continua.",
        ToastType.ERROR
      );
    } else {
      nextStep();
    }
  }, [nextStep, watchedCenter]);

  const handleCurrentLocation = async () => {
    await verifyLocationAccess();
    setCity("");
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <DropdownWrapper>
        <Dropdown
          name="pack"
          placeholder="EX: Suceava"
          label="Selectează județul *"
          selectedOptions={city}
          options={cities}
          callbackOnChange={handleChangeCities}
        />
      </DropdownWrapper>
      <Button variant="secondary" type="button" onClick={handleCurrentLocation}>
        Găsește locația cea mai apropiată
      </Button>
      {centers?.map((item: CenterDetails) => {
        return (
          <CenterCard
            key={item?.id}
            name={item?.name}
            latitude={item?.lat}
            longitude={item?.lng}
            street={item?.fullAddress}
            schedule={item?.schedule}
            handleSelect={() => setValue("center", item.id)}
            isActive={watchedCenter === item?.id}
          />
        );
      })}
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

const JUDETE_ROMANIA = [
  "Alba",
  "Arad",
  "Argeș",
  "Bacău",
  "Bihor",
  "Bistrița-Năsăud",
  "Botoșani",
  "Brașov",
  "Brăila",
  "Buzău",
  "Caraș-Severin",
  "Călărași",
  "Cluj",
  "Constanța",
  "Covasna",
  "Dâmbovița",
  "Dolj",
  "Galați",
  "Giurgiu",
  "Gorj",
  "Harghita",
  "Hunedoara",
  "Ialomița",
  "Iași",
  "Ilfov",
  "Maramureș",
  "Mehedinți",
  "Mureș",
  "Neamț",
  "Olt",
  "Prahova",
  "Satu Mare",
  "Sălaj",
  "Sibiu",
  "Suceava",
  "Teleorman",
  "Timiș",
  "Tulcea",
  "Vaslui",
  "Vâlcea",
  "Vrancea",
  "Municipiul București",
];
