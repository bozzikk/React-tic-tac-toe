import './App.css';
import { Board } from './Board';
import React,{useState} from "react";

function App() {

  const [pickedX, setPickedX] = useState(new Array());
  const [pickedO, setPickedO] = useState(new Array());



  return(
    <Board pickedX={pickedX} pickedO={pickedO} setPickedX={setPickedX} setPickedO={setPickedO} />
  );
}

/*

*/ 

export default App;
