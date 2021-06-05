import React from 'react';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';

import useStyles from './useStyles';
import NormalCard from '../../UI/Cards/NormalCard';

const Background = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container justify="space-between">
        <GridList className={classes.firstColumn} item>
          <NormalCard name="coursera" bgColor="#0055d3" />
        </GridList>
        <GridList className={classes.secondColumn} item>
          <NormalCard name="inflearn" bgColor="#40b349" />
        </GridList>
        <GridList className={classes.thirdColumn} item>
          <NormalCard name="udemy" bgColor="#dcdacb" />
        </GridList>
        <GridList className={classes.fourthColumn} item>
          <NormalCard name="programmers" bgColor="#0c151b" />
        </GridList>
        <GridList className={classes.fifthColumn} item>
          <NormalCard name="udacity" bgColor="#02b3e4" />
        </GridList>
        <GridList className={classes.sixthColumn} item>
          <NormalCard name="edwith" bgColor="#fff" />
        </GridList>
      </Grid>
    </div>
  );
};

export default Background;
