import {
  Container,
  Input,
  TextField,
} from "@material-ui/core";
import { IDefaultFormData } from "../../sign-up.stepper.section.types";
import { SetForm } from "react-hooks-helper";
import { UAUTextMaskCustom } from "../../../../../../components";
import HeaderComponent from "../../steppers-components/header/header.component";

interface IProfileSectionProps {
  formData: IDefaultFormData;
  setForm: SetForm;
}

function ProfileSection({
  setForm,
  formData,
}: IProfileSectionProps) {

  const { firstname, lastname, nickname, phoneNumber } = formData;

  //TODO: Fix date picker for forms after release.
  return (
    <Container maxWidth="sm" disableGutters>
      <HeaderComponent
        title="Queremos saber mais sobre você!"
        subTitle=" Dica: Os campos marcados com (*) são obrigatórios."
      />
      <TextField
        label="Primeiro nome"
        name="firstname"
        value={firstname}
        onChange={setForm}
        margin="normal"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Sobrenome"
        name="lastname"
        value={lastname}
        onChange={setForm}
        margin="normal"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Qual seu apelido ou nome social?"
        name="nickname"
        value={nickname}
        onChange={setForm}
        margin="normal"
        autoComplete="off"
        fullWidth
      />
      <Input
        value={phoneNumber}
        onChange={setForm}
        name="phoneNumber"
        inputComponent={UAUTextMaskCustom as any}
        fullWidth
      />
    </Container>
  );
}

export { ProfileSection };
