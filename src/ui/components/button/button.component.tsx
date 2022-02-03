import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ReactNode } from 'react';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 17,
    right: 25,
  },
});

interface IButton {
  text: string,
  icon?: ReactNode,
  onClick?: () => void,
  isDisable?: boolean,
}
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
