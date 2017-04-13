import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Breadcrumb: {
    textAlign: 'center'
  }
};

const Breadcrumb = ({classes}) => {
  return (
    <div className={classes.Breadcrumb}>
      <p>Breadcrumb</p>
    </div>
  );
}

export default injectSheet(styles)(Breadcrumb);
