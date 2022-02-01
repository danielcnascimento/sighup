import { Box, Container, IconButton, Input, TextField, Typography } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import { DefaultFormData } from "../../sign-up.stepper.section.types";
import { SetForm } from 'react-hooks-helper';
import { InfoOutlined } from "@material-ui/icons";
import useStyles from "./profile.section.style";
import TextMaskCustom from "../../../../../components/text-masker/text-masker.component";

interface IProfileSectionProps {
  formData: DefaultFormData,
  setForm: SetForm,
  navigation: {
    next: () => void;
  },
}

function ProfileSection({ navigation, setForm, formData }: IProfileSectionProps) {
  const { firstname, lastname, nickname, birthdate, phoneNumber } = formData

  const handleDateChange = (date: Date | null) => setForm

  const classes = useStyles();

  return (
    <Container maxWidth="sm" disableGutters>
      <Box className={classes.heading}>
        <Box component="p">
          <Typography variant="h5">
            Queremos saber mais sobre você!
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
        label="Primeiro nome"
        name="firstname"
        value={firstname}
        onChange={setForm}
        margin="normal"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Sobrename"
        name="lastname"
        value={lastname}
        onChange={setForm}
        margin="normal"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Sobrenome"
        name="nickname"
        value={nickname}
        onChange={setForm}
        margin="normal"
        autoComplete="off"
        fullWidth
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          label="Data de aniversário"
          name="birthdate"
          value={birthdate}
          defaultValue="01-01-2000"
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
      <Input
        value={phoneNumber}
        onChange={setForm}
        name="textmask"
        inputComponent={TextMaskCustom as any}
        fullWidth
      />
    </Container>
  )
}

export { ProfileSection }
