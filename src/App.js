import React from 'react';
import injectSheet from 'react-jss';
import Toolbar from './components/Toolbar';
import Breadcrumb from './components/Breadcrumb';
import ToggleButton from './components/ToggleButton';
import Accordion from './components/Accordion';

const styles = {
  App: {
    textAlign: 'center',
  },
  Heading: {
    margin: '.5em',
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activated: false,
      accordionOpen: -1,
    };
    this.toggleButton = this.toggleButton.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
  }
  toggleButton() {
    this.setState({
      activated: !this.state.activated,
    });
  }
  toggleAccordion(num) {
    if (num === this.state.accordionOpen) {
      this.setState({
        accordionOpen: -1,
      });
    } else {
      this.setState({
        accordionOpen: num,
      });
    }
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
          handleToggle={this.toggleButton}
          activated={this.state.activated}
          text='Toggle Button'
        />
        <h3 className={classes.Heading}>Accordion</h3>
        <Accordion 
          handleToggle={this.toggleAccordion}
          activated={this.state.accordionOpen}
          data={[
          {title: 'Home', text: 'Some text'},
          {title: 'Forum', text: 'Some more text'},
          {title: 'Chat', text: 'Even more text'},
        ]}/>
      </div>
    );
  }
}

export default injectSheet(styles)(App);
