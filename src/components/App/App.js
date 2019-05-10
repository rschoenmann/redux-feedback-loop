import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

// Components
import Feelings from '../Feelings/Feelings';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Feelings />
        <ReviewFeedback />
        <br/>
      </div>
    );
  }
}

export default App;
