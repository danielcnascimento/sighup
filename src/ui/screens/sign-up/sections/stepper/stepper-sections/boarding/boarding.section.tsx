import { ReactElement } from "react";
import {
  Container,
  TextField,
} from "@material-ui/core";
import HeaderComponent from "../../steppers-components/header/header.component";
import { IBoardingSectionProps } from "./boarding.section.type";

function BoardingSection({ setForm, formData }: IBoardingSectionProps): ReactElement {
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
        fullWidth
        autoComplete="new-password"
      />
      <TextField
        label="Senha"
        name="password"
        value={password}
        type="password"
        onChange={setForm}
        margin="normal"
        fullWidth
        autoComplete="new-password"
      />
      <TextField
        label="Confirme sua senha"
        name="checkupPassword"
        value={checkupPassword}
        type="password"
        onChange={setForm}
        margin="normal"
        fullWidth
        autoComplete="new-password"
      />
    </Container>
  );
}

export { BoardingSection };
