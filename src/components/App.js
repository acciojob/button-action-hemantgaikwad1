import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
const[visible,setVisible]=useState(false);
  return (
    <div className="App" id="main">
     <p className={visible?"show":"hide"} id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
     <button onClick={()=>setVisible(true)} id="click">show</button>
    </div>
  );
}

export default App
