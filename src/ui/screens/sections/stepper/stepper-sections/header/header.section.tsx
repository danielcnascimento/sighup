import { ArrowBackIosRounded, ArrowForwardIosRounded } from '@material-ui/icons';
import { IconButton } from "@material-ui/core";
import { HeaderSectionStyle } from "./header.section.style";
import { ProgressComponent } from "../../../../../components";

function HeaderSection() {
  return (
      <HeaderSectionStyle>
        <section>
          <IconButton>
            <ArrowBackIosRounded color="primary"/>
          </IconButton>
            <div>
              <p>Quero ser <span>UAUmig</span></p>
            </div>
          <IconButton>
            <ArrowForwardIosRounded color="primary"/>
          </IconButton>
        </section>
        <ProgressComponent />
        <p>Etapa 1 de 3</p>
      </HeaderSectionStyle>
  )
}

export { HeaderSection };
