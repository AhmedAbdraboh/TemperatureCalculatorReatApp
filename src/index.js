import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App,{Calculator} from './App';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Calculator />, document.getElementById('calc'))

registerServiceWorker();
