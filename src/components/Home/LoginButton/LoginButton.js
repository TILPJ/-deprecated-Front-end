import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  button: {},
});
const LoginButton = ({ handleLoginFormOpen }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      variant="outlined"
      color="primary"
      onClick={handleLoginFormOpen}
    >
      로그인하기
    </Button>
  );
};

LoginButton.propTypes = {
  handleLoginFormOpen: PropTypes.func.isRequired,
};

export default LoginButton;
