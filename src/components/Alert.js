import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Alert: {
    textAlign: 'center',
  },
};

const Alert = ({ classes }) => (
  <div className={classes.Alert}>
    <p>Alert</p>
  </div>
  );

export default injectSheet(styles)(Alert);
