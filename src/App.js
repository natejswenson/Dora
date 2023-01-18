import logo from './logo.svg';
import '@tremor/react/dist/esm/tremor.css';
import Base from './components/Base'
import Metrics from './components/Metrics'
import './App.css';
import json from './base.json';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Base json={json}/>
      </div>
    );
  }
}

export default App;