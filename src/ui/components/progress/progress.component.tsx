import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { IProgressComponentProps } from "./progress.component.type";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  customStyle: {
    height: "10px",
  },
});

function UAUProgressComponent({ stepsIndex }: IProgressComponentProps) {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    const stepperProgress = Math.round(((stepsIndex + 1) * 100) / 3);
    setProgress(stepperProgress);
  }, [stepsIndex]);

  return (
    <div className={classes.root}>
      <LinearProgress
        className={classes.customStyle}
        variant="determinate"
        value={progress}
      />
    </div>
  );
}

export { UAUProgressComponent };
