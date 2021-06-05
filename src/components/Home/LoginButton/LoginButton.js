import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import PropTypes from 'prop-types';

const useStyles = makeStyles({
  container: {
    position: 'relative',
    top: 200,
    display: 'flex',
    justifyContent: 'center',
  },
});
const LoginButton = ({ handleLoginFormOpen }) => {
  const classes = useStyles();
  return (
    <Container className={classes.container} component="div" maxWidth="xs">
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        onClick={handleLoginFormOpen}
      >
        로그인하기
      </Button>
    </Container>
  );
};

LoginButton.propTypes = {
  handleLoginFormOpen: PropTypes.func.isRequired,
};

export default LoginButton;
