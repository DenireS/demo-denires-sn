import React from 'react';
import App from './App';
import ReactDOM from 'react-dom'
import MainSNApp from "./App";

test('renders learn react link', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MainSNApp />, div)
  ReactDOM.unmountComponentAtNode( div)
});
