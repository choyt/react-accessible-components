import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  ModalDialog: {
    textAlign: 'center'
  }
};

const ModalDialog = ({classes}) => {
  return (
    <div className={classes.ModalDialog}>
      <p>ModalDialog</p>
    </div>
  );
}

export default injectSheet(styles)(ModalDialog);
