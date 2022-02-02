import React, { useState } from "react";
import { Box, IconButton, Typography } from "@material-ui/core";
import { InfoOutlined } from "@material-ui/icons";
import useStyles from "./header.component.style";
import { UAUModal } from "../../../../../components";

interface HeaderComponentProps {
  title: string;
  subTitle: string;
}

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
        />
      )}
    </Box>
  );
}

export default HeaderComponent;
