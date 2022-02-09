import { SubmitHandler, useForm } from "react-hook-form";
import { ArrowForwardIosRounded } from "@material-ui/icons";
import { useStepperForm } from "@context/use-stepper-form.context";
import { UAUButtonComponent } from "@components";
import {
  IDefaultFormData,
} from "@screens/sign-up/sections/stepper/sign-up.stepper.section.types";
import { UAUStepperComponentProps } from "./stepper.component.type";

function UAUStepperComponent({ stepperMap }: UAUStepperComponentProps) {
  const { stepperProps } = useStepperForm();
  const { handleSubmit } = useForm<IDefaultFormData>();
  const { stepperProps: { index: step, handleStepperPress } } = useStepperForm();

  const onSubmit: SubmitHandler<IDefaultFormData> = (data) => {
    handleStepperPress()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {stepperMap[stepperProps.index]}
      <UAUButtonComponent
        text={step === 2 ? 'Finalizar' : 'Continuar'}
        icon={<ArrowForwardIosRounded />}
      />
    </form>
  );
}

export { UAUStepperComponent }
