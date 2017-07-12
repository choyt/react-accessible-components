import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const styles = {
  ComboBox: {
    textAlign: 'center',
  },
  Highlighted: {},
  Title: {
    cursor: 'pointer',
    font: '13.3333px Arial',
    padding: '.5em',
    '&:hover': {
      backgroundColor: 'lightgray',
    },
    '&$Highlighted': {
      backgroundColor: 'lightgray',
    },
  },
};

const ComboBox = ({
  handleChange,
  handleClick,
  handleKeyDown,
  highlightedIdx,
  inputValue,
  options,
  textInput,
  classes}) => {
    return (
      <div className={classes.ComboBox}>
        <input
          type='text'
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}/>
        <div>
          {options.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleClick(idx)}
              className={classNames({
                [classes.Highlighted]: idx === highlightedIdx,
                [classes.Title]: true,
              })}>
              {item}
            </div>
          ))}
        </div>
      </div>
    );
}

export default injectSheet(styles)(ComboBox);
