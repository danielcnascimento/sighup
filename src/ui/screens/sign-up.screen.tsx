import { ReactElement } from "react";
import SighUpStepper from "./stepper/sign-up.stepper";

function SignUpScreen(): ReactElement {
    return (
        <div>
            <section>
                <SighUpStepper />
            </section>
            <section>
                {/* add logo components*/}
            </section>
        </div>
    )
}

export default SignUpScreen;
