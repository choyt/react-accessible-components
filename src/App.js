import React from 'react';
import injectSheet from 'react-jss';
import TypeAhead from './components/TypeAhead';

const styles = {
  App: {
    textAlign: 'center'
  }
};

const App = ({classes}) => {
  return (
    <div className={classes.App}>
      <div className="App-header">
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <TypeAhead />
    </div>
  );
}

export default injectSheet(styles)(App);
