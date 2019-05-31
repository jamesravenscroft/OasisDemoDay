import React from 'react';
import MenuSelections from "./components/MenuSelections";
import Title from "./components/Title";
import './App.css';



function App() {
  return (
    <div className="App" style={{position:"fixed", zIndex:1, alignContent:"center"}}>
        <Title style={{position:"relative", zIndex:100, alignContent:"center"}}/>
        <MenuSelections style={{position:"relative", zIndex:100}}/>
    </div>
  );
}

export default App;
