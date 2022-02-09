import { ReactElement } from "react";
import SighUpStepper from "./sections/stepper/sign-up.stepper.section";
import SighUpBrand from "./sections/brand/sigh-up.brand.section";
import { SighUpContainer } from "./sigh-up.style";

function SignUpScreen(): ReactElement {
  return (
    <SighUpContainer>
      <SighUpStepper />
      <SighUpBrand />
    </SighUpContainer>
  )
}

export default SignUpScreen;
