import React from 'react';
import injectSheet from 'react-jss';

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
  Toolbar: {
    display: 'inline-block',
    padding: '.5em',
    textAlign: 'center',
  },
};

const Toolbar = ({data, classes, children}) => {
  return (
    <div className={classes.Toolbar}>
      {data.map((item, idx) => (
        <button key={idx} className={classes.Button}>
          {item.text}
        </button>
      ))}
    </div>
  );
}

export default injectSheet(styles)(Toolbar);
