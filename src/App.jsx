import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import './App.css'


const icons= Array.from({length:5}, (_,index)=>({id:index + 1, symbol:<FaStar/>,}))


export default function App() {

  const [select, setSelect] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(iconId){
    setSelect(iconId);
  }
  
  return (
    <div>
      <h1>Rating</h1>
      <div className="stars">
        {icons.map(( icon) => (
          <span key={icon.id} className={icon.id <= (hover || select) ? "active":"inactive"}
          onClick={()=> handleClick(icon.id)}
          onMouseMove={()=> setHover(icon.id)}
          onMouseLeave={()=> setHover(select)}
          >{icon.symbol}</span>
        ))}
      </div>
    </div>
  );
}

