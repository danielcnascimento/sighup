import { ReactNode } from "react";
import Modal from "react-modal";
import { makeStyles } from "@material-ui/core";

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
    padding: "2rem",
    backgroundColor: "white",
    borderRadius: "15px",
    fontSize: "1.2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});

interface IModalsProps {
  isOpen: boolean;
  onClose?: () => void;
  modalTitle?: string;
  children?: ReactNode;
}

export function UAUModal({
  isOpen,
  onClose,
  modalTitle,
  children,
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
        <h4>{modalTitle}</h4>
        {children}
      </section>
    </Modal>
  );
}
