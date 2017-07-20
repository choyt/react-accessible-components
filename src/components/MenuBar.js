import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  MenuButton: {
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
  Menu: {
    border: '1px solid black',
    padding: '.5em',
  },

  MenuBar: {
    display: 'inline-block',
    textAlign: 'center',
    padding: '.5em',
  },
};

const MenuBar = ({ data, handleToggle, toggledIdx, classes }) => (
  <div className={classes.MenuBar}>
    {data.map((val, idx) => (
      <button
        className={classes.MenuButton}
        key={idx}
        onClick={() => handleToggle(idx)}
      >
        {val.title}
      </button>
    ))}
    {toggledIdx > -1 && toggledIdx < data.length
    ? <div className={classes.Menu}>
      {data[toggledIdx].text}
    </div>
    : null}
  </div>
  );

export default injectSheet(styles)(MenuBar);
