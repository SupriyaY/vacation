import React from 'react';
import './App.css';
import {Home, Rooms, SingleRoom, Error } from './components/index'
// import Error from "./pages/Error"

import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms/" component={Rooms} />
      <Route exact path="/rooms/:place" component={SingleRoom}/>

      {/* <Home/>
      <Room/>
      <SingleRoom/>
      <Error/> */}
      </div>
  );
}

export default App;
