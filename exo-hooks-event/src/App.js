import React, {useState} from "react";
import PlusOne from './components/Exo1'
import ChangeText from "./components/Exo2";
import Copy from "./components/Exo3";
import Focus from "./components/Exo4";
import AlertClick from "./components/Exo5";

function App() {

  const [number, setNumber] = useState({
    click: 0
  })
  
  let [text, setText] = useState('default text')

  return (
    <div className="App">
      <PlusOne click={number.click} add={setNumber}/>
      <ChangeText val={text} setVal={setText} />
      <Copy />
      <Focus />
      <AlertClick />
    </div>
  );
}

export default App;
