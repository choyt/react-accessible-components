import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const styles = {
  Button: {
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '.2em',
    cursor: 'pointer',
    padding: '.5em',
    '&:active': {
      background: '#ccc',
    },
  },
  Activated: {
    backgroundColor: 'gray',
  },
  ToggleButton: {
    display: 'inline-block',
    padding: '.5em',
    textAlign: 'center',
  },
};

const ToggleButton = ({activated, handleToggle, text, classes, children}) => {
  return (
    <div className={classes.ToggleButton}>
      <button className={classNames({
        [classes.Button]: true,
        [classes.Activated]: activated
      })}
      onClick={handleToggle}>
        {text}
      </button>
    </div>
  );
}

export default injectSheet(styles)(ToggleButton);
