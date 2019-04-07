import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchBox from './Components/SearchBox';
import registerServiceWorker from '../src/serviceWorker.js';

ReactDOM.render(<SearchBox />, document.getElementById('root'));
registerServiceWorker();
