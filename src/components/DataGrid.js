import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  DataGrid: {
    textAlign: 'center',
  }
};

const DataGrid = ({classes}) => {
  return (
    <div className={classes.DataGrid}>
      <p>DataGrid</p>
    </div>
  );
}

export default injectSheet(styles)(DataGrid);
