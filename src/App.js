import React from 'react';
import './App.css';
import {Home, Room, SingleRoom, Error } from './components/index'

function App() {
  return (
    <div>
      hello from app
      <Home/>
      <Room/>
      <SingleRoom/>
      <Error/>
      </div>
  );
}

export default App;
