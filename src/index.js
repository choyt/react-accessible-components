import React from 'react';
import ReactDOM from 'react-dom';
import a11y from 'react-a11y';
import App from './App';
import './index.css';

a11y(React);

ReactDOM.render(<App />, document.getElementById('root'));
