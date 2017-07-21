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

const Toolbar = ({ data, classes }) =>
  <div className={classes.Toolbar}>
    {data.map((item, idx) =>
      <button key={idx} className={classes.Button}>
        {item}
      </button>
    )}
  </div>;

export default injectSheet(styles)(Toolbar);

/*
<div role="toolbar" id="customToolbar" tabindex="0" aria-activedescendant="button1"
      onkeydown="return optionKeyEvent(event);"
      onkeypress="return optionKeyEvent(event);"
      onblur="hideFocus();"
      onfocus="showFocus();"
      >
      <img src="img/btn1.gif" title="Home" alt="Home" role="button" id="button1"
           onclick="updateText('Home was invoked');">
      <img src="img/btn2.gif" title="Refresh" alt="Refresh" role="button" id="button2"
           onclick="updateText('Refresh was invoked');">
      <img src="img/btn3.gif" title="Help" alt="Help" role="button" id="button3"
           onclick="updateText('Help was invoked');">
</div>
*/