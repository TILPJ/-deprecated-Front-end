import React, { useState } from 'react';

import Background from '../../components/Home/Background';

import Title from '../../components/Home/Title';
import LoginButton from '../../components/Home/LoginButton';
import LoginForm from '../../components/Home/LoginForm';
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
        <>
          <Title />
          <LoginButton handleLoginFormOpen={handleLoginFormOpen} />
        </>
      ) : (
        <LoginForm />
      )}
    </>
  );
};

export default Home;
