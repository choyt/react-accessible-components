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
    cursor: 'pointer',
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
    <ul className={classes.ListBox} role="listbox">
      {options.map((option, idx) =>
        <li className={classes.ListItem} key={idx}>
          {option}
        </li>
      )}
    </ul>
  </div>;

export default injectSheet(styles)(AutoComplete);

/*
<div
  aria-label="Tag"
  role="combobox"
  aria-expanded="true"
  aria-owns="owned_listbox"
  aria-haspopup="listbox"
 >
    <input
      type="text"
      aria-autocomplete="list"
      aria-controls="owned_listbox"
      aria-activedescendant="selected_option"
    >
</div>
<ul role="listbox" id="owned_listbox">
    <li role="option">Zebra</li>
    <li role="option" id="selected_option">Zoom</li>
</ul>

const addCounting = compose(
  withState('counter', 'setCounter', 0),
  withHandlers({
    increment: ({ setCounter }) => () => setCounter(n => n + 1),
    decrement: ({ setCounter }) => () =>  setCounter(n => n - 1),
    reset: ({ setCounter }) => () => setCounter(0)
  })
)


const withCondition = conditionalRenderingFn => Component => props =>
  conditionalRenderingFn(props) ? null : <Component {...props} />;
*/
