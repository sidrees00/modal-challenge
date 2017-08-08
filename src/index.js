import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import store from './modalStore';


ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();
