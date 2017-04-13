import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Toolbar: {
    textAlign: 'center'
  }
};

const Toolbar = ({classes}) => {
  return (
    <div className={classes.Toolbar}>
      <p>Toolbar</p>
    </div>
  );
}

export default injectSheet(styles)(Toolbar);
