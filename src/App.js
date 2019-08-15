import React from 'react';
import './App.css';
import {Home, Rooms, SingleRoom, Navbar, Error } from './components/index';
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms/" component={Rooms} />
      <Route exact path="/rooms/:place" component={SingleRoom}/>
      <Route component={Error}/>
     </Switch>
      </div>
  );
}

export default App;
