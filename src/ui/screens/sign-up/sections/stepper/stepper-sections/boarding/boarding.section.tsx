import {
  Box,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import { InfoOutlined } from "@material-ui/icons";
import { DefaultFormData } from "../../sign-up.stepper.section.types";
import { SetForm } from "react-hooks-helper";
import HeaderComponent from "../../steppers-components/header/header.component";

interface IBoardingSectionProps {
  formData: DefaultFormData;
  setForm: SetForm;
  navigation?: {
    next: () => void;
  };
}

function BoardingSection({ setForm, formData }: IBoardingSectionProps) {
  const { email, password, checkupPassword } = formData;

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
