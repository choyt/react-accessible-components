import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Alert: {
    backgroundColor: 'lightgray',
    border: '1px solid black',
    padding: '.5em',
    textAlign: 'center',
  },
};

const Alert = ({ text, classes }) => (
  <div className={classes.Alert}>
    {text}
  </div>
  );

export default injectSheet(styles)(Alert);
