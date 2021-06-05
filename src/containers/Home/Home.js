import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

import LoginForm from '../../components/Home/LoginForm';
import Background from '../../components/Home/Background';
import useStyles from './useStyles';

const Home = () => {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  const classes = useStyles();

  const handleLoginFormOpen = () => {
    setIsLoginFormOpen(!isLoginFormOpen);
  };

  return (
    <>
      <Background />
      {/* {!isLoginFormOpen ? (
        <>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleLoginFormOpen}
          >
            Login
          </Button>
        </>
      ) : (
        <LoginForm />
      )} */}
      <Button variant="outlined" color="primary" onClick={handleLoginFormOpen}>
        로그인하기
      </Button>
    </>
  );
};

export default Home;
