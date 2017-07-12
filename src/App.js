import React from 'react';
import injectSheet from 'react-jss';
import update from 'immutability-helper';
import Accordion from './components/Accordion';
import Breadcrumb from './components/Breadcrumb';
import ListBox from './components/ListBox';
import ComboBox from './components/ComboBox';
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

const comboBoxOptions = ['a', 'Home', 'Forum', 'Chat', 'Chart', 'Bar Chart'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accordionOpen: -1,
      comboBoxHighlighted: -1,
      comboBoxInputValue: '',
      comboBoxOptions: comboBoxOptions,
      toggleActivated: false,
      toggledListBoxIndices: [],
    };
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
    this.handleComboBoxChange = this.handleComboBoxChange.bind(this);
    this.handleComboBoxClick = this.handleComboBoxClick.bind(this);
    this.handleComboBoxKeyDown = this.handleComboBoxKeyDown.bind(this);
    this.toggleListBox = this.toggleListBox.bind(this);
  }

  handleComboBoxChange(e) {
    const v = e.target.value;
    this.setState(update(this.state, {
      comboBoxInputValue: { $set: v },
      comboBoxOptions: { $set: comboBoxOptions.filter(i => i.includes(v)) },
    }));
  }

  handleComboBoxClick(idx) {
    const v = this.state.comboBoxOptions[idx];
    this.setState(update(this.state, {
      comboBoxInputValue: { $set: v },
      comboBoxOptions: { $set: comboBoxOptions.filter(i => i.includes(v)) },
    }));
  }

  handleComboBoxKeyDown(e) {
    let newIdx = -1;
    switch (e.key) {
      case 'ArrowDown':
        newIdx = Math.min(
          this.state.comboBoxHighlighted + 1,
          this.state.comboBoxOptions.length - 1
        );
        this.setState({
          comboBoxHighlighted: newIdx,
        });
        break;

      case 'ArrowUp':
        newIdx = Math.max(
          this.state.comboBoxHighlighted - 1,
          0
        );
        this.setState({
          comboBoxHighlighted: newIdx,
        });
        break;

      case 'Enter':
        const newVal = this.state.comboBoxOptions[
          this.state.comboBoxHighlighted];
        this.setState({
          comboBoxInputValue: newVal,
        });
        break;

      default:
    }
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
          { $push: [idx] }),
      });
    } else {
      this.setState({
        toggledListBoxIndices: update(this.state.toggledListBoxIndices,
          { $splice: [[containingIdx, 1]] }),
      });
    }
  }

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.App}>
        <h3 className={classes.Heading}>Toolbar</h3>
        <Toolbar data={['Home', 'Forum', 'Chat']} />
        <h3 className={classes.Heading}>Breadcrumb</h3>
        <Breadcrumb
          data={[
          { text: 'Home', link: '/#/home' },
          { text: 'Forum', link: '/#/forum' },
          { text: 'Chat', link: '/#/chat' },
          ]}
        />
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
          { title: 'Home', text: 'Some text' },
          { title: 'Forum', text: 'Some more text' },
          { title: 'Chat', text: 'Even more text' },
          ]}
        />
        <h3 className={classes.Heading}>ListBox</h3>
        <ListBox
          handleToggle={this.toggleListBox}
          toggledIndices={this.state.toggledListBoxIndices}
          data={['Home', 'Forum', 'Chat']}
        />
        <h3 className={classes.Heading}>ComboBox</h3>
        <ComboBox
          handleChange={this.handleComboBoxChange}
          handleClick={this.handleComboBoxClick}
          handleKeyDown={this.handleComboBoxKeyDown}
          highlightedIdx={this.state.comboBoxHighlighted}
          inputValue={this.state.comboBoxInputValue}
          options={this.state.comboBoxOptions}
        />
      </div>
    );
  }
}

export default injectSheet(styles)(App);
