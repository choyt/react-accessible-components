import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Tooltip: {
    textAlign: 'center',
  },
};

const Tooltip = ({ classes }) => (
  <div className={classes.Tooltip}>
    <p>Tooltip</p>
  </div>
  );

export default injectSheet(styles)(Tooltip);
