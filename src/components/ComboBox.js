import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  ComboBox: {
    textAlign: 'center',
  }
};

const ComboBox = ({classes}) => {
  return (
    <div className={classes.ComboBox}>
      <p>ComboBox</p>
    </div>
  );
}

export default injectSheet(styles)(ComboBox);
