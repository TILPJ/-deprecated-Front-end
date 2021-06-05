import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '100%',
    height: 'auto',
  },
  firstColumn: {
    transform: 'translateY(100%)',
  },
  secondColumn: {
    transform: 'translateY(130%)',
  },
  thirdColumn: {
    transform: 'translateY(170%)',
  },
  fourthColumn: {
    transform: 'translateY(170%)',
  },
  fifthColumn: {
    transform: 'translateY(130%)',
  },
  sixthColumn: {
    transform: 'translateY(100%)',
  },
});

export default useStyles;
