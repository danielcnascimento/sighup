import { Step, useForm, useStep } from "react-hooks-helper"
import { ArrowForwardIosRounded } from "@material-ui/icons";
import { UAUButtonComponent } from "../../../components";
import { SighUpStepperContainer } from "./sign-up.stepper.section.style";
import { HeaderSection, BoardingSection } from "./stepper-sections";
import { DefaultFormData, IShowStepperUI } from "./sign-up.stepper.section.types";
import { ProfileSection } from "./stepper-sections/profile/profile.section";

function ShowStepperUI(stepperProps: IShowStepperUI) {
  switch (stepperProps.index) {
    case 0:
      return <BoardingSection {...stepperProps} />;
    case 1:
      return <ProfileSection {...stepperProps} />
  }

  return <h1> Ops! </h1>
}

function SighUpStepper() {
  const [formData, setForm] = useForm<DefaultFormData>({
    email: "",
    password: "",
    checkupPassword: "",
  })
  const { index, navigation } = useStep({
    steps: 4,
    initialStep: 0,
  });

  const stepperProps = {
    index,
    setForm,
    formData,
    navigation,
  }

  return (
    <SighUpStepperContainer>
      <HeaderSection />
      <ShowStepperUI {...stepperProps} />
      <UAUButtonComponent
        text="Continuar"
        icon={<ArrowForwardIosRounded />}
        onClick={navigation.next}
      />
    </SighUpStepperContainer>
  )
}

export default SighUpStepper
