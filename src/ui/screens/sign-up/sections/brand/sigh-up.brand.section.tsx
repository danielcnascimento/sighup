import Image from 'next/image';
import { BrandStyle } from './sigh-up.brand.section.style'
import { useStepperForm } from "@context/use-stepper-form.context";
import { useMemo } from "react";
import { Box } from "@material-ui/core";

function SighUpBrand() {

  const { stepperProps: { index: step } } = useStepperForm()

  const isLastStep = useMemo(() => (
    step === 2
  ), [step])

  const WIDTH_UAU = isLastStep ? 250 : 295
  const WIDTH_UAU_LAST_STEP = 400

  return (
    <BrandStyle>
      <Image
        src="/icons/logo_uau_white.svg" alt="Logo"
        layout="intrinsic"
        width={WIDTH_UAU}
        height={WIDTH_UAU}
      />

      {isLastStep ? (
        <Box style={{
          position: "relative",
          bottom: "0",
        }}>
          <Image
            src="/icons/uau-pic-almost-there.svg" alt="Logo"
            layout="intrinsic"
            width={WIDTH_UAU_LAST_STEP}
            height={WIDTH_UAU_LAST_STEP}
          />
        </Box>
        ) : (
        <p>
          Faça seu cadastro e aproveite todos os
          nossos conteúdos!
        </p>
        )
      }
    </BrandStyle>
  )
}

export default SighUpBrand
