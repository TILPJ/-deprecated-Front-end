import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import useStyles from './useStyles';

const NormalCard = ({ name, bgColor }) => {
  const classes = useStyles({ bgColor });

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        component="img"
        image={
          name !== 'udemy'
            ? `images/logos/${name}.png`
            : `images/logos/${name}.svg`
        }
      />
    </Card>
  );
};

NormalCard.propTypes = {
  name: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
};
NormalCard.defaultProps = {
  bgColor: 'red',
};

export default NormalCard;
