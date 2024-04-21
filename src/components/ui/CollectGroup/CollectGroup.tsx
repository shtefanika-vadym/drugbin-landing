import React, { ReactNode } from "react";
import { InfoBox, InfoType } from "../InfoBox/InfoBox";
import { Stepper } from "../Stepper/Stepper";
import {
  Container,
  Description,
  Mandatory,
  Title,
} from "./CollectGroup.styled";

interface CollectGroupProps {
  children: ReactNode;
  title?: string;
  description?: string;
  currentStep: number;
  infoType?: InfoType;
  mandatoryField?: boolean;
  stepper?: boolean;
}

export const CollectGroup: React.FC<CollectGroupProps> = ({
  title,
  description,
  infoType,
  currentStep,
  mandatoryField = true,
  stepper = true,
  children,
}) => {
  return (
    <Container>
      {stepper && <Stepper steps={3} currentStep={currentStep + 1}></Stepper>}
      <Title>{title}</Title>
      <Description>{description}</Description>
      {mandatoryField && (
        <Mandatory>Câmpurile marcate cu * sunt obligatorii.</Mandatory>
      )}
      {infoType && <InfoBox type={infoType} />}
      {children}
    </Container>
  );
};
