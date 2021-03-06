import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const styles = {
  ListBox: {
    padding: '.5em',
    textAlign: 'center',
  },
  Title: {
    backgroundColor: 'white',
    border: '1px solid lightgray',
    cursor: 'pointer',
    padding: '.5em',
    '&:hover': {
      backgroundColor: 'lightgray',
    },
    '&$Toggled': {
      backgroundColor: 'gray',
    },
  },
  Toggled: {},
};

const ListBox = ({ handleToggle, toggledIndices, data, classes }) =>
  <div className={classes.ListBox}>
    {data.map((item, idx) =>
      <button
        key={idx}
        onClick={() => handleToggle(idx)}
        className={classNames({
          [classes.Title]: true,
          [classes.Toggled]: toggledIndices.indexOf(idx) !== -1,
        })}
      >
        {item}
      </button>
    )}
  </div>;

export default injectSheet(styles)(ListBox);
