import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Tab: {
    backgroundColor: 'white',
    border: '1px solid lightgray',
    cursor: 'pointer',
    padding: '.5em',
    '&:active': {
      backgroundColor: 'gray',
    },
    '&:hover': {
      backgroundColor: 'lightgray',
    },
  },
  TabPanel: {
    border: '1px solid lightgray',
    padding: '.5em',
  },
  TabList: {
    display: 'inline-block',
    textAlign: 'center',
    padding: '.5em',
  },
};

const TabList = ({ data, handleToggle, toggledIdx, classes }) =>
  <div className={classes.TabList}>
    {data.map((val, idx) =>
      <button
        className={classes.Tab}
        key={idx}
        onClick={() => handleToggle(idx)}
      >
        {val.title}
      </button>
    )}
    <div className={classes.TabPanel}>
      {data[toggledIdx].text}
    </div>
  </div>;

export default injectSheet(styles)(TabList);
