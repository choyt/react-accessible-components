import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Feed: {
    textAlign: 'center',
  },
};

const Feed = ({ classes }) =>
  <div className={classes.Feed}>
    <p>Feed</p>
  </div>;

export default injectSheet(styles)(Feed);
