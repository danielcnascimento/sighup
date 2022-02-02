import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { HeaderSectionStyle } from "./header.section.style";
import { UAUProgressComponent } from "../../../../../components";
import { useStepperForm } from "../../../../../../context/use-stepper-form.context";

function HeaderSection() {
  const { stepperProps: { index, navigation } } = useStepperForm();
  return (
    <HeaderSectionStyle>
      <section>
        <IconButton onClick={navigation.previous}>
          <ArrowBackIosRounded color="primary" />
        </IconButton>
        <div>
          <p>
            Quero ser <span>UAUmig</span>
          </p>
        </div>
        <IconButton onClick={navigation.next}>
          <ArrowForwardIosRounded color="primary" />
        </IconButton>
      </section>
      <UAUProgressComponent stepsIndex={index} />
      <p>Etapa {index + 1} de 3</p>
    </HeaderSectionStyle>
  );
}

export { HeaderSection };
