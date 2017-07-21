import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Tooltip: {
    textAlign: 'center',
  },
};

const Tooltip = ({ classes, children }) =>
  <div className={classes.Tooltip}>
    {children}
  </div>;

export default injectSheet(styles)(Tooltip);
