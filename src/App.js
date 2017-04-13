import React from 'react';
import injectSheet from 'react-jss';
import Toolbar from './components/Toolbar';
import Breadcrumb from './components/Breadcrumb';

const styles = {
  App: {
    textAlign: 'center',
  },
  Heading: {
    margin: '.5em',
  }
};

const App = ({classes}) => {
  return (
    <div className={classes.App}>
      <h3 className={classes.Heading}>Toolbar</h3>
      <Toolbar data={[
        {text: 'button 1'},
        {text: 'button 2'},
        {text: 'button 3'},
      ]}/>
      <h3 className={classes.Heading}>Breadcrumb</h3>
      <Breadcrumb data={[
        {text: 'Home', link: '/#/home'},
        {text: 'Forum', link: '/#/forum'},
        {text: 'Chat', link: '/#/chat'},
      ]}/>
    </div>
  );
}

export default injectSheet(styles)(App);
