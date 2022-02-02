import React, { ReactNode } from "react";
import Modal from "react-modal";
import {Box, IconButton, makeStyles, Typography} from "@material-ui/core";
import {CloseRounded, EmailOutlined} from "@material-ui/icons";

const useStyles = makeStyles({
  globalModalOverly: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: `var(--overlay)`,
    zIndex: 3000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  globalModalContent: {
    position: "relative",
    maxWidth: 600,
    width: "100%",
    padding: ".5rem 2rem 2rem",
    backgroundColor: "white",
    borderRadius: "15px",
    fontSize: "1.2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  globalModalHeader: {
    width: "100%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    color: "var(--primary)",
  },
  modalBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& > *:nth-child(1)': {
      borderTop: '1px solid var(--smooth-grey)',
      marginTop: '15px',
      padding: '15px 0',
    },
  },
  modalBoxHeader : {
    display: 'flex',
    fontWeight: 'bold',
    '& > svg': {
      margin: '0 5px 0 0',
    }
  },
});

type modalContentBox = {
  title: string,
  text: string,
  icon: ReactNode,
}

interface IModalsProps {
  isOpen: boolean;
  onClose?: () => void;
  modalTitle?: string;
  modalContent?: modalContentBox[];
}

export function UAUModal({
  isOpen,
  onClose,
  modalTitle,
  modalContent,
}: IModalsProps) {

  const classes = useStyles();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={classes.globalModalOverly}
      className={classes.globalModalContent}
    >
      <section>
        <Box className={classes.globalModalHeader}>
          {modalTitle}
          <IconButton onClick={onClose}>
            <CloseRounded color="primary"/>
          </IconButton>
        </Box>
        {modalContent?.map((content, index) => (
          <Box className={classes.modalBox} key={index}>
            <Typography className={classes.modalBoxHeader}>
              {content.icon}
              <Typography variant="subtitle1">
                {content.title}
              </Typography>
            </Typography>
            <Box component="p">
              {content.text}
            </Box>
          </Box>
        ))}
      </section>
    </Modal>
  );
}
