import React from 'react';
import injectSheet from 'react-jss';
import update from 'immutability-helper';
import Accordion from './components/Accordion';
import Breadcrumb from './components/Breadcrumb';
import ListBox from './components/ListBox';
import ToggleButton from './components/ToggleButton';
import Toolbar from './components/Toolbar';

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
      accordionOpen: -1,
      toggleActivated: false,
      toggledListBoxIndices: [],
    };
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
    this.toggleListBox = this.toggleListBox.bind(this);
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
  toggleButton() {
    this.setState({
      toggleActivated: !this.state.toggleActivated,
    });
  }
  toggleListBox(idx) {
    const containingIdx = this.state.toggledListBoxIndices.indexOf(idx);
    if (containingIdx === -1) {
      this.setState({
        toggledListBoxIndices: update(this.state.toggledListBoxIndices,
          {$push: [idx]}),
        });
    } else {
      this.setState({
        toggledListBoxIndices: update(this.state.toggledListBoxIndices,
          {$splice: [[containingIdx, 1]]}),
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
          activated={this.state.toggleActivated}
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
        <h3 className={classes.Heading}>ListBox</h3>
        <ListBox 
          handleToggle={this.toggleListBox}
          toggledIndices={this.state.toggledListBoxIndices}
          data={[
          {text: 'Home'},
          {text: 'Forum'},
          {text: 'Chat'},
        ]}/>
      </div>
    );
  }
}

export default injectSheet(styles)(App);
