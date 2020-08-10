import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {MainSNApp} from "./App";

ReactDOM.render(<MainSNApp/>, document.getElementById('root'));

serviceWorker.unregister();
