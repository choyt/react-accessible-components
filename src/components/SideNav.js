import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  SideNav: {
    textAlign: 'center',
  },
};

const SideNav = ({ classes }) => (
  <div className={classes.SideNav}>
    <p>SideNav</p>
  </div>
  );

export default injectSheet(styles)(SideNav);
