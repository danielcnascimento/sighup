import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ReactNode } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 56,
      width: '80%',
      borderRadius: 40,
      textTransform: 'none',
      fontSize: 22,
      '& svg': {
        position: 'absolute',
        top: 17,
        right: 25,
      },
    },
  }),
);

interface IButton {
  text: string,
  icon?: ReactNode,
  onClick?: () => void,
}
function UAUButtonComponent({ text, icon, onClick }:IButton) {
  const classes = useStyles();

  return (
    <Button 
      variant="contained"
      color="primary"
      onClick={onClick}
      className={classes.root}
      endIcon={icon}
      fullWidth
    >
      {text}
    </Button>
  );
}

export { UAUButtonComponent }