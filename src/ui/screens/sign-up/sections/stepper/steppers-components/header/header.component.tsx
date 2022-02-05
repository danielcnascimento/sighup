import React, { useState } from "react";
import {
  Box,
  IconButton,
  Typography,
} from "@material-ui/core";
import {
  InfoOutlined,
  EmailOutlined,
  PinDropOutlined,
  SmartphoneOutlined,
} from "@material-ui/icons";
import useStyles from "./header.component.style";
import { UAUModal } from "../../../../../../components";

interface HeaderComponentProps {
  title: string;
  subTitle: string;
}

const modalContentMap = [
  {
    title: "EMAIL",
    text: "Com seu e-mail você consegue ter acesso a todos os nossos canais, e também deixamos a sua experiência ainda mais incrível!",
    icon: <EmailOutlined color="primary" />,
  },{
    title: "CELULAR",
    text: "Usamos seu celular para manter você segura(o) caso seja necessário login de duas etapas, e também para deixar você sempre atualizada(o) das novidades!",
    icon: <SmartphoneOutlined color="primary" />,
  },{
    title: "ENDEREÇO",
    text: "Com seu endereço, podemos passar informações mais rapidamente, como valor de frete, ou quando tem uma novidade pertinho de você ;)",
    icon: <PinDropOutlined color="primary" />,
  },
]

function HeaderComponent({ title, subTitle }: HeaderComponentProps) {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);

  return (
    <Box className={classes.heading}>
      <Box component="p">
        <Typography variant="h5">{title}</Typography>
        <Typography variant="subtitle1">{subTitle}</Typography>
      </Box>
      <IconButton onClick={() => setShowModal(true)}>
        <InfoOutlined color="primary" />
      </IconButton>
      {showModal && (
        <UAUModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          modalTitle="Como usamos seus dados"
          modalContent={modalContentMap}
        />
      )}
    </Box>
  );
}

export default HeaderComponent;
