import { ReactElement, useMemo } from "react";
import { useStepperForm } from "@context/use-stepper-form.context";
import {
  BoardingSection,
  AddressSection,
  ProfileSection,
} from "./stepper-sections";
import {
  UAUStepperComponent,
  UAUStepsHeaderComponent,
} from "@components";
import { SighUpStepperContainer } from "./sign-up.stepper.section.style";

function SighUpStepper() {
  const { stepperProps } = useStepperForm();

  const stepperMap: ReactElement[] = useMemo(() => ([
      <BoardingSection key={0} {...stepperProps} />,
      <AddressSection key={1} {...stepperProps} />,
      <ProfileSection key={2} {...stepperProps} />,
    ].filter((step) => !!step)
  ), [stepperProps])

  return (
    <SighUpStepperContainer>
      <UAUStepsHeaderComponent />
      <UAUStepperComponent {...{ stepperMap }} />
    </SighUpStepperContainer>
  );
}

export default SighUpStepper;
