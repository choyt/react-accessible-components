import React from 'react';
import injectSheet from 'react-jss';
import update from 'immutability-helper';
import Accordion from './components/Accordion';
import Alert from './components/Alert';
import Breadcrumb from './components/Breadcrumb';
import DataGrid from './components/DataGrid';
import ListBox from './components/ListBox';
import ComboBox from './components/ComboBox';
import Tabs from './components/Tabs';
import ToggleButton from './components/ToggleButton';
import Toolbar from './components/Toolbar';
import Tooltip from './components/Tooltip';

const styles = {
  App: {
    textAlign: 'center',
  },
  Heading: {
    margin: '.5em',
  },
};

const comboBoxOptions = ['a', 'Home', 'Forum', 'Chat', 'Chart', 'Bar Chart'];
const dataGridHeaders = [
  { title: 'Home', key: 'home' },
  { title: 'Forum', key: 'forum' },
  { title: 'Chat', key: 'chat' },
];
const dataGridData = [
  { home: 'fooHome', forum: 'fooForum', chat: 'fooChat' },
  { home: 'barHome', forum: 'barForum', chat: 'barChat' },
  { home: 'bazHome', forum: 'bazForum', chat: 'bazChat' },
  { home: 'quuxHome', forum: 'quuxForum', chat: 'quuxChat' },
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accordionOpen: -1,
      comboBoxHighlighted: -1,
      comboBoxInputValue: '',
      comboBoxOptions: comboBoxOptions,
      highlightedCell: { idx: -1, hidx: -1 },
      toggleActivated: false,
      toggledListBoxIndices: [],
      toggledTabPanelIndex: 1,
    };
    this.handleComboBoxChange = this.handleComboBoxChange.bind(this);
    this.handleComboBoxClick = this.handleComboBoxClick.bind(this);
    this.handleComboBoxKeyDown = this.handleComboBoxKeyDown.bind(this);
    this.handleDataGridBlur = this.handleDataGridBlur.bind(this);
    this.handleDataGridFocus = this.handleDataGridFocus.bind(this);
    this.handleDataGridKeyDown = this.handleDataGridKeyDown.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
    this.toggleListBox = this.toggleListBox.bind(this);
    this.toggleTabPanel = this.toggleTabPanel.bind(this);
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

  handleDataGridKeyDown(e) {
    e.preventDefault();
    let newCoords = this.state.highlightedCell;
    let newIdx = -1;
    switch (e.key) {
      case 'ArrowDown':
        newIdx = Math.min(this.state.highlightedCell.idx + 1,
          dataGridData.length - 1);
        newCoords = update(this.state.highlightedCell, {
          idx: { $set: newIdx },
        });
        break;
      case 'ArrowUp':
        newIdx = Math.max(this.state.highlightedCell.idx - 1,
          0);
        newCoords = update(this.state.highlightedCell, {
          idx: { $set: newIdx },
        });
        break;
      case 'ArrowLeft':
        newIdx = Math.max(this.state.highlightedCell.hidx - 1,
          0);
        newCoords = update(this.state.highlightedCell, {
          hidx: { $set: newIdx },
        });
        break;
      case 'ArrowRight':
        newIdx = Math.min(this.state.highlightedCell.hidx + 1,
          dataGridHeaders.length - 1);
        newCoords = update(this.state.highlightedCell, {
          hidx: { $set: newIdx },
        });
        break;
      default:
    }
    this.setState({
      highlightedCell: newCoords,
    });
  }

  handleDataGridBlur(e) {
    this.setState({
      highlightedCell: { idx: -1, hidx: -1 },
    });
  }

  handleDataGridFocus(e) {
    this.setState({
      highlightedCell: { idx: 0, hidx: 0 },
    });
  }

  handleTooltipMouseOver(e) {}

  handleTooltipMouseOut(e) {}

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

  toggleTabPanel(idx) {
    this.setState({toggledTabPanelIndex: idx});
  }

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.App}>

        <h3 className={classes.Heading}>Accordion</h3>
        <Accordion
          activated={this.state.accordionOpen}
          data={[
          { title: 'Home', text: 'Some text' },
          { title: 'Forum', text: 'Some more text' },
          { title: 'Chat', text: 'Even more text' },
          ]}
          handleToggle={this.toggleAccordion}
        />

        <h3 className={classes.Heading}>Alert</h3>
        <Alert text='This is the text of the Alert' />

        <h3 className={classes.Heading}>Breadcrumb</h3>
        <Breadcrumb
          data={[
          { text: 'Home', link: '/#/home' },
          { text: 'Forum', link: '/#/forum' },
          { text: 'Chat', link: '/#/chat' },
          ]}
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

        <h3 className={classes.Heading}>DataGrid</h3>
        <DataGrid
          data={dataGridData}
          handleBlur={this.handleDataGridBlur}
          handleFocus={this.handleDataGridFocus}
          handleKeyDown={this.handleDataGridKeyDown}
          headers={dataGridHeaders}
          highlightedCell={this.state.highlightedCell}
        />

        <h3 className={classes.Heading}>ListBox</h3>
        <ListBox
          handleToggle={this.toggleListBox}
          toggledIndices={this.state.toggledListBoxIndices}
          data={['Home', 'Forum', 'Chat']}
        />

        <h3 className={classes.Heading}>Tabs</h3>
        <Tabs
          data={[
          { title: 'Home', text: 'Some text' },
          { title: 'Forum', text: 'Some more text' },
          { title: 'Chat', text: 'Even more text' },
          ]}
          toggledIdx={this.state.toggledTabPanelIndex}
          handleToggle={this.toggleTabPanel}
        />


        <h3 className={classes.Heading}>ToggleButton</h3>
        <ToggleButton
          activated={this.state.toggleActivated}
          handleToggle={this.toggleButton}
          text='Toggle Button'
        />

        <h3 className={classes.Heading}>Toolbar</h3>
        <Toolbar data={['Home', 'Forum', 'Chat']} />

        <h3 className={classes.Heading}>Tooltip</h3>
        <Tooltip>
          <button
            onMouseOut={this.handleTooltipMouseOut}
            onMouseOver={this.handleTooltipMouseOver}
          >
            Hover me
          </button>
        </Tooltip>
      </div>
    );
  }
}

export default injectSheet(styles)(App);
