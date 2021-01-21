import React, { Component } from 'react';
import CameraTest from './CameraTest'
import ImageClassifier from './ImageClassifier'
import './App.css';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <ImageClassifier></ImageClassifier>
        <CameraTest></CameraTest>
      </div>
    );
  }
}

export default App;
