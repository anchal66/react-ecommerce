import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

const HatsPage =()=>(
  <div>
    <h1>I Hats PAge</h1>
  </div>
)

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route  path="/hats" component={HatsPage}/>
    </Switch>
  );
}

export default App;
