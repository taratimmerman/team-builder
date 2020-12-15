import './App.css';
import React, { useState } from 'react'
import TeamList from './Team'

function App() {

  const [ members, setMembers ] = useState([]);

  return (
    <div className="App">
      <TeamList TeamList={members}/>
    </div>
  );
}

export default App;
