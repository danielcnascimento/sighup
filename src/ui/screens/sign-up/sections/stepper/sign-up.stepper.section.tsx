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
import { SubmitHandler, useForm } from "react-hook-form";
import { IDefaultFormData } from "./sign-up.stepper.section.types";

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
  const { stepperProps: { index: step, handleStepperPress } } = useStepperForm();

  const { handleSubmit } = useForm<IDefaultFormData>();

  const onSubmit: SubmitHandler<IDefaultFormData> = (data) => {
    handleStepperPress()
  }

  return (
    <SighUpStepperContainer>
      <HeaderSection />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ShowStepperUI />
      </form>
      <UAUButtonComponent
        text={step === 2 ? 'Finalizar' : 'Continuar'}
        icon={<ArrowForwardIosRounded />}
        onClick={() => handleStepperPress()}
      />
    </SighUpStepperContainer>
  );
}

export default SighUpStepper;
