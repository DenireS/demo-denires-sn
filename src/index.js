import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {InitApp} from "./App";

ReactDOM.render(<InitApp/>, document.getElementById('root'));

serviceWorker.unregister();
