import Image from "next/image";
import { ConclusionStyle } from "./conclusion.style";

import { ReactNode } from "react";
import { useStepperForm } from "../../../context/use-stepper-form.context";

function ConclusionScreen(): ReactNode{
  const { stepperProps: {
    formData
  } } = useStepperForm()
  return (
    <ConclusionStyle>
      <span>
        <p>Olá {formData.nickname}! Agora voce é nossa nova UAUMig!</p>
        <p>Estamos muito felizes em te receber!</p>
      </span>

      <Image
        src="/icons/success.svg"
        alt="Logo"
        layout="intrinsic"
        width={489}
        height={484}
      />
    </ConclusionStyle>
  );
}

export default ConclusionScreen;
