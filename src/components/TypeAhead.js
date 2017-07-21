import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  TypeAhead: {
    textAlign: 'center',
  },
};

const TypeAhead = ({ classes }) =>
  <div className={classes.TypeAhead}>
    <p>TypeAhead</p>
  </div>;

export default injectSheet(styles)(TypeAhead);
