import React from 'react';
import injectSheet from 'react-jss';
// import { withState } from 'recompose';

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
};

// const withCondition = conditionalRenderingFn => Component => props =>
//  conditionalRenderingFn(props) ? null : <Component {...props} />;

const AutoComplete = ({ options, classes }) =>
  <div className={classes.AutoComplete}>
    <div className={classes.ComboBox}>
      <input
        type="text"
        aria-autocomplete="list"
      />
    </div>
    <ul className={classes.ListBox} role="listbox">
      {options.map((option, idx) => {
        return <li key={idx}>{option}</li>;
      })}
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
*/
