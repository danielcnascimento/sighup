import { Container } from "@material-ui/core";
import { DefaultFormData } from "../../sign-up.stepper.section.types";
import { SetForm } from 'react-hooks-helper';

interface IProfileSectionProps {
  formData: DefaultFormData,
  setForm: SetForm,
  navigation: {
    next: () => void;
  },
}

function ProfileSection({ navigation, setForm, formData }: IProfileSectionProps) {
  return (
    <Container>
      This will be the PROFILE section!
    </Container>
  )
}

export { ProfileSection }
