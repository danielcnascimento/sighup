import { ArrowBackIosRounded, ArrowForwardIosRounded } from '@material-ui/icons';
import { IconButton } from "@material-ui/core";
import { Header } from "./header.style";
import { ProgressComponent } from "../../../components";

function HeaderSection() {
  return (
      <Header>
        <section>
          <IconButton>
            <ArrowBackIosRounded color="primary"/>
          </IconButton>

          <p>Quero ser <span>UAUmig</span></p>

          <IconButton>
            <ArrowForwardIosRounded color="primary"/>
          </IconButton>
        </section>
        <ProgressComponent />
      </Header>
  )
}

export default HeaderSection;
