import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import LoginForm from '../../components/LoginForm';

const home = () => {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  const handleLoginFormOpen = () => {
    setIsLoginFormOpen(!isLoginFormOpen);
  };

  return (
    <>
      {!isLoginFormOpen ? (
        <Button
          variant="outlined"
          color="primary"
          onClick={handleLoginFormOpen}
        >
          로그인하기
        </Button>
      ) : (
        <LoginForm />
      )}
    </>
  );
};

export default home;
