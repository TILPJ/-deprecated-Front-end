import React, { useState } from 'react';
import { Typography } from '@material-ui/core';

import LoginButton from '../../components/Home/LoginButton';
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
      {!isLoginFormOpen ? (
        <LoginButton handleLoginFormOpen={handleLoginFormOpen} />
      ) : (
        <LoginForm />
      )}
    </>
  );
};

export default Home;
