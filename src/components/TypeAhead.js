import React from 'react';
import injectSheet from 'react-jss';
import { withState } from 'recompose';

const styles = {
  TypeAhead: {
    textAlign: 'center',
  },
};


const TypeAhead = ({ classes }) =>
  <div
    className={classes.TypeAhead}
  >
    <div
      role="combobox"
      aria-owns="listbox"
      aria-haspopup="listbox"
    </div>;

export default injectSheet(styles)(TypeAhead);

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
