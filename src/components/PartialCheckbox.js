import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  PartialCheckbox: {
    textAlign: 'center',
  },
};

const PartialCheckbox = ({ classes }) => (
  <div className={classes.PartialCheckbox}>
    <p>PartialCheckbox</p>
  </div>
  );

export default injectSheet(styles)(PartialCheckbox);
