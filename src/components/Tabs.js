import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Tab: {
    display: 'inline-block',
  },
  TabList: {},
  Tabs: {
    textAlign: 'center',
  },
};

const Tabs = ({ data, classes }) => (
  <div className={classes.Tabs}>
    <div className={classes.TabList}>
      {data.map((val, idx) => (
        <div className={classes.Tab}>
          {val.title}
        </div>
      ))}
    </div>
  </div>
  );

export default injectSheet(styles)(Tabs);
