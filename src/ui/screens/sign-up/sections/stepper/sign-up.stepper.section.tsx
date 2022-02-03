import { ArrowForwardIosRounded } from "@material-ui/icons";
import { UAUButtonComponent } from "../../../../components";
import { SighUpStepperContainer } from "./sign-up.stepper.section.style";
import {
  HeaderSection,
  BoardingSection,
  AddressSection,
  ProfileSection,
} from "./stepper-sections";
import { useStepperForm } from "../../../../../context/use-stepper-form.context";

function ShowStepperUI() {
  const { stepperProps } = useStepperForm();

  switch (stepperProps.index) {
    case 0:
      return <BoardingSection {...stepperProps} />;
    case 1:
      return <ProfileSection {...stepperProps} />;
    case 2:
      return <AddressSection {...stepperProps} />;
  }

  return <h1> Ops! </h1>;
}

function SighUpStepper() {
  const { stepperProps: { navigation, index: step, handleStepperPress } } = useStepperForm();

  return (
    <SighUpStepperContainer>
      <HeaderSection />
      <ShowStepperUI />
      <UAUButtonComponent
        text={step === 2 ? 'Finalizar' : 'Continuar'}
        icon={<ArrowForwardIosRounded />}
        onClick={() => handleStepperPress()}
      />
    </SighUpStepperContainer>
  );
}

export default SighUpStepper;
