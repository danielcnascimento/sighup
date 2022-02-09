import { ReactElement } from "react";
import {
  Container,
  TextField,
} from "@material-ui/core";
import HeaderComponent from "../../steppers-components/header/header.component";
import { IAddressSectionProps } from "./address.section.type";

function AddressSection({ setForm, formData, addressInfo }: IAddressSectionProps): ReactElement {
  const { cep } = formData;

  const { data: {
    city: userAddressCity,
    district: userAddressNeiborhood,
  } } = addressInfo

  return (
    <Container maxWidth="sm" disableGutters>
      <HeaderComponent
        title="Otimo! Agora queremos saber de onde você fala"
        subTitle="Dica: Essas etapas são importantes para melhorar sua experiência &#128522;"
      />
      <TextField
        label="CEP (apenas números)"
        type="number"
        name="cep"
        value={cep}
        onChange={setForm}
        margin="normal"
        fullWidth
        inputProps={{ maxLength: "8" }}
        autoComplete="new-password"
      />
      <TextField
        label="Cidade"
        name="city"
        value={userAddressCity}
        onChange={setForm}
        disabled
        margin="normal"
        fullWidth
      />
      <TextField
        label="Bairro"
        name="neighborhood"
        value={userAddressNeiborhood}
        onChange={setForm}
        disabled
        margin="normal"
        fullWidth
      />
    </Container>
  );
}

export { AddressSection };
