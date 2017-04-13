import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  DropdownList: {
    textAlign: 'center',
  }
};

const DropdownList = ({classes}) => {
  return (
    <div className={classes.DropdownList}>
      <p>DropdownList</p>
    </div>
  );
}

export default injectSheet(styles)(DropdownList);
