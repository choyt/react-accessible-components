import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Nav: {
    textAlign: 'center',
  },
};

const Nav = ({ classes }) =>
  <div className={classes.Nav}>
    <p>Nav</p>
  </div>;

export default injectSheet(styles)(Nav);
