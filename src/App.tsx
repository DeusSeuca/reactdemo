import React, { Component } from 'react';
import GlobalNav from './componets/GlobalNav';
import Main from './componets/Main';
import Chat from './componets/Chat';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './assets/css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <GlobalNav />
          <Route exact path="/" component={Main}/>
          <Route exact path="/chat" component={Chat}/>
        </div>
      </Router>
    );
  }
}

export default App;
