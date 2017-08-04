import React from 'react';
import injectSheet from 'react-jss';
// import { compose, withHandlers, withState } from 'recompose';

const styles = {
  AutoComplete: {
    textAlign: 'center',
  },
  ComboBox: {},
  ListBox: {
    listStyle: 'none',
    margin: '0',
    padding: '0',
  },
  ListItem: {
    border: '1px solid lightgray',
    cursor: 'pointer',
    padding: '.5em',
  },
};

// const enhance = compose(
//   withState('value', 'inputValue', ''),
//   withHandlers({
//     onChange: props => event => {
//       props.updateValue(event.target.value);
//     }
//   })
// )

const AutoComplete = ({
  classes,
  handleChange,
  handleKeyDown,
  inputValue,
  isOpen,
  options,
}) =>
  <div className={classes.AutoComplete}>
    <div className={classes.ComboBox}>
      <input
        aria-autocomplete="list"
        aria-label="input"
        onChange={handleChange} //
        onKeyDown={handleKeyDown} //
        type="text"
        value={inputValue} //
      />
    </div>
    
    {isOpen ? 
    <div className={classes.ListBox} role="listbox">
      {options.map((option, idx) =>
        <div className={classes.ListItem} key={idx}>
          {option}
        </div>
      )}
    </div> :
    null}
  </div>;

export default injectSheet(styles)(AutoComplete);
