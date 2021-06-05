import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 210,
    height: 320,
    backgroundColor: (props) => props.bgColor,
  },
  media: {
    width: '80%',
  },
});

export default useStyles;
