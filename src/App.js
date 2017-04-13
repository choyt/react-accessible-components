import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  App: {
    textAlign: 'center'
  }
};

const App = ({classes}) => {
  return (
    <div className={classes.App}>
      <div className="App-header">
        <h2>Why are these components so spare?</h2>
      </div>
      <p className="App-intro">
        The focus of this project is correctness and accessibility, rather than, say, copying common conventions of how buttons ought be styled.
      </p>
    </div>
  );
}

export default injectSheet(styles)(App);
