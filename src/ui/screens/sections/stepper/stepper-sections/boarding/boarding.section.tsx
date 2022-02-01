import {
  Box,
  Container, IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import {
  InfoOutlined
} from "@material-ui/icons";
import { DefaultFormData } from "../../sign-up.stepper.section.types";
import { SetForm } from 'react-hooks-helper';
import useStyles from "./boarding.section.style";

interface IBoardingSectionProps {
  formData: DefaultFormData,
  setForm: SetForm,
  navigation?: {
    next: () => void;
  },
}

function BoardingSection({ setForm, formData }: IBoardingSectionProps) {
  const { email, password, checkupPassword } = formData;

  const classes = useStyles()

  return (
    <Container maxWidth="sm" disableGutters>
      <Box className={classes.heading}>
        <Box component="p">
          <Typography variant="h5">
            Cadastro da Mig!
          </Typography>
          <Typography variant="subtitle1">
            Dica: Os campos marcados com (*) são obrigatórios ;)
          </Typography>
        </Box>
        <IconButton>
          <InfoOutlined color="primary" />
        </IconButton>
      </Box>
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
  )
}

export { BoardingSection }
