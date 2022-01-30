import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  customStyle: {
    height: "10px",
  },
});

function ProgressComponent() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(30);

  return (
    <div className={classes.root}>
      <LinearProgress className={classes.customStyle} variant="determinate" value={progress} />
    </div>
  );
}

export { ProgressComponent }
