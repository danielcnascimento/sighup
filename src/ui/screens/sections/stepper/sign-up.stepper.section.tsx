import { ReactNode, useCallback, useMemo, useState } from "react";
import { ArrowForwardIosRounded } from "@material-ui/icons";
import { UAUButtonComponent } from "../../../components";
import { SighUpStepperContainer } from "./sign-up.stepper.section.style";
import { HeaderSection, BoardingSection } from "./stepper-sections";

type StepperMap = {
  [key: number]: () => ReactNode,
}

function SighUpStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const stepperMap: StepperMap = {
    0: () => <BoardingSection />,
    1: () => <h1>Fim!!!</h1>
  }

  const steps = Object.keys(stepperMap)
  
  // TODO: Deve enviar handleBack e handleNext para HeaderSection. 
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }
  
  const ShowStepperUI:ReactNode | any = useCallback(() => {
    return function getStepUi() {
      stepperMap[activeStep] || <h1> Ops! </h1>
    }
    
  }, [
    activeStep,
    getStepUi,
  ])

  return (
    <SighUpStepperContainer>
      <HeaderSection />
      <ShowStepperUI />
      <UAUButtonComponent
        text="Continuar"
        onClick={() => handleNext}
        icon={<ArrowForwardIosRounded />}
      />
    </SighUpStepperContainer>
  )
}

export default SighUpStepper
