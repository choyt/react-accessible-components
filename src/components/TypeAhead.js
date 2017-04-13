import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  TypeAhead: {
    textAlign: 'center',
    fontWeight: 'bold',
  }
};

const TypeAhead = ({classes}) => {
  return (
    <div className={classes.TypeAhead}>
      <p>TypeAhead</p>
    </div>
  );
}

export default injectSheet(styles)(TypeAhead);
