import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const ComboBox = ({
  handleChange,
  handleClick,
  handleKeyDown,
  highlightedIdx,
  inputValue,
  isOpen,
  options,
  textInput,
  classes,
}) =>
  <div className={classes.ComboBox}>
    <input
      aria-label="input"
      className={classes.Input}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      type="text"
      value={inputValue}
    />
    {isOpen ?
    <div role="listbox">
      {options.map((item, idx) =>
        <div
          key={idx}
          aria-selected={idx === highlightedIdx}
          className={classNames({
            [classes.Highlighted]: idx === highlightedIdx,
            [classes.Title]: true,
          })}
          onClick={() => handleClick(idx)}
          role="option"
          tabIndex={-1}
        >
          {item}
        </div>
      )}
    </div> :
    null}
  </div>;

const styles = {
  ComboBox: {
    textAlign: 'center',
  },
  Highlighted: {},
  Input: {
    textAlign: 'center',
  },
  Title: {
    cursor: 'pointer',
    padding: '.5em',
    '&:hover': {
      backgroundColor: 'lightgray',
    },
    '&$Highlighted': {
      backgroundColor: 'lightgray',
    },
  },
};

export default injectSheet(styles)(ComboBox);
