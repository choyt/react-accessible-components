import React from 'react';
import injectSheet from 'react-jss';
import Toolbar from './components/Toolbar';
import Breadcrumb from './components/Breadcrumb';
import ToggleButton from './components/ToggleButton';

const styles = {
  App: {
    textAlign: 'center',
  },
  Heading: {
    margin: '.5em',
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activated: false};
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      activated: !this.state.activated
    });
  }
  render() {
    const classes = this.props.classes;
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
        <h3 className={classes.Heading}>ToggleButton</h3>
        <ToggleButton 
          handleToggle={this.toggle}
          activated={this.state.activated}
          text='Toggle Button'
        />
      </div>
    );
  }
}

export default injectSheet(styles)(App);
