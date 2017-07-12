import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Tabs: {
    textAlign: 'center',
  },
};

const Tabs = ({ classes }) => (
  <div className={classes.Tabs}>
    <p>Tabs</p>
  </div>
  );

export default injectSheet(styles)(Tabs);
