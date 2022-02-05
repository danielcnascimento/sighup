import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  heading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',

    '& p': {
      color: 'var(--dark-text)',
    },
  },
});

export default useStyles
