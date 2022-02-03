import { ReactElement } from "react";
import SighUpStepper from "./sections/stepper/sign-up.stepper.section";
import SighUpBrand from "./sections/brand/sigh-up.brand.section";
import { SighUpStyle } from "./sigh-up.style";

function SignUpScreen(): ReactElement {
  return (
    <SighUpStyle>
      <SighUpStepper />
      <SighUpBrand />
    </SighUpStyle>
  )
}

export default SignUpScreen;
