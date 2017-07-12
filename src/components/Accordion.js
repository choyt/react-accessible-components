import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const styles = {
  Accordion: {
    textAlign: 'center',
    padding: '.5em',
  },
  Content: {
    display: 'none',
    padding: '.5em',
    '&$Expanded': {
      display: 'block',
    },
  },
  Expanded: {},
  Panel: {},
  Title: {
    backgroundColor: 'white',
    border: '1px solid black',
    cursor: 'pointer',
    padding: '.5em',
    '&:hover': {
      background: '#ccc',
    },
  },
};

const Accordion = ({activated, handleToggle, data, classes}) => {
  return (
    <div className={classes.Accordion}>
      {data.map((item, idx) => (
        <div key={idx} className={classes.Panel}>
          <div 
            className={classes.Title}
            onClick={() => handleToggle(idx)}>
            {item.title}
          </div>
          <div 
            className={classNames({
              [classes.Content]: true,
              [classes.Expanded]: idx === activated,
            })}>
            {item.text}
          </div>
        </div>
      ))}
    </div>
  );
}

export default injectSheet(styles)(Accordion);
