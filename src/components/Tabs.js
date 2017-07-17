import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Tab: {
    backgroundColor: 'white',
    border: '1px solid black',
    cursor: 'pointer',
    padding: '.5em',
    '&:active': {
      backgroundColor: 'gray',
    },
    '&:hover': {
      backgroundColor: 'lightgray',
    },
  },
  TabList: {},
  TabPanel: {
    border: '1px solid black',
  },

  Tabs: {
    display: 'inline-block',
    textAlign: 'center',
    padding: '.5em',
  },
};

const Tabs = ({ data, handleToggle, toggledIdx, classes }) => (
  <div className={classes.Tabs}>
    {data.map((val, idx) => (
      <button className={classes.Tab} onClick={() => handleToggle(idx)}>
        {val.title}
      </button>
    ))}
    <div className={classes.TabPanel}>
      {data[toggledIdx].text}
    </div>
  </div>
  );

export default injectSheet(styles)(Tabs);
