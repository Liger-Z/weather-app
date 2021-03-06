import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from './components/Header';
import Weather from './components/Weather'

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Weather />
      <Switch>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
