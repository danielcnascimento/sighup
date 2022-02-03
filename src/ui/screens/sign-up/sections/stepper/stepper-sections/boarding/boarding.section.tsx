import {
  Container,
  TextField,
} from "@material-ui/core";
import { IDefaultFormData } from "../../sign-up.stepper.section.types";
import { SetForm } from "react-hooks-helper";
import HeaderComponent from "../../steppers-components/header/header.component";

interface IBoardingSectionProps {
  formData: IDefaultFormData;
  setForm: SetForm;

}

function BoardingSection({ setForm, formData }: IBoardingSectionProps) {
  const { email, password, checkupPassword } = formData;

 // TODO: Implementação do controller apos release.
  return (
    <Container maxWidth="sm" disableGutters>
      <HeaderComponent
        title=" Cadastro da Mig!"
        subTitle=" Dica: Os campos marcados com (*) são obrigatórios."
      />
      <TextField
        label="Email válido"
        name="email"
        value={email}
        onChange={setForm}
        margin="normal"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Senha"
        name="password"
        value={password}
        type="password"
        onChange={setForm}
        margin="normal"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Confirme sua senha"
        name="checkupPassword"
        value={checkupPassword}
        type="password"
        onChange={setForm}
        margin="normal"
        autoComplete="off"
        fullWidth
      />
    </Container>
  );
}

export { BoardingSection };
