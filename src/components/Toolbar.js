import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Button: {
    backgroundColor: 'white',
    border: '1px solid black',
    cursor: 'pointer',
    padding: '.5em',
    '&:active': {
      backgroundColor: 'gray',
    },
  },
  Toolbar: {
    display: 'inline-block',
    padding: '.5em',
    textAlign: 'center',
  },
};

const Toolbar = ({data, classes}) => {
  return (
    <div className={classes.Toolbar}>
      {data.map((item, idx) => (
        <button key={idx} className={classes.Button}>
          {item}
        </button>
      ))}
    </div>
  );
}

export default injectSheet(styles)(Toolbar);
