import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    top: 150,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginTop: theme.spacing(2),
    color: theme.palette.primary.light,
  },
}));

const Title = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h3">매일의 학습을 기록하세요</Typography>
      <Typography className={classes.title} variant="h2">
        TILPJ
      </Typography>
    </div>
  );
};

export default Title;
