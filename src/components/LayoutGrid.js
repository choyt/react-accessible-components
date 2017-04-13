import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  LayoutGrid: {
    textAlign: 'center'
  }
};

const LayoutGrid = ({classes}) => {
  return (
    <div className={classes.LayoutGrid}>
      <p>LayoutGrid</p>
    </div>
  );
}

export default injectSheet(styles)(LayoutGrid);
