import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Dialog: {
    textAlign: 'center',
  }
};

const Dialog = ({classes}) => {
  return (
    <div className={classes.Dialog}>
      <p>Dialog</p>
    </div>
  );
}

export default injectSheet(styles)(Dialog);
