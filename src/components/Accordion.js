import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  Accordion: {
    textAlign: 'center'
  }
};

const Accordion = ({classes}) => {
  return (
    <div className={classes.Accordion}>
      <p>Accordion</p>
    </div>
  );
}

export default injectSheet(styles)(Accordion);
