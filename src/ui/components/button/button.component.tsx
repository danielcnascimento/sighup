import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { IButton } from "./button.component.type";

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 17,
    right: 25,
  },
});

function UAUButtonComponent({ text, icon, onClick, isDisable }:IButton) {
  const classes = useStyles();

  return (
    <Button
      classes={{ endIcon: classes.root }}
      style={{
        height: 56,
        width: '80%',
        borderRadius: 40,
        textTransform: 'none',
        fontSize: 22,
      }}
      variant="contained"
      color="primary"
      endIcon={icon}
      onClick={onClick}
      disabled={isDisable}
      type="submit"
    >
      {text}
    </Button>
  );
}

export { UAUButtonComponent }
