import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  TopNav: {
    textAlign: 'center',
  }
};

const TopNav = ({classes}) => {
  return (
    <div className={classes.TopNav}>
      <p>TopNav</p>
    </div>
  );
}

export default injectSheet(styles)(TopNav);
