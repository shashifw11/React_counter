import {useState} from "react" ; 
export const Counter = ()=>{
  const [counter , setCounter] = useState(0) ; 

  const clickFun = (value) =>{
      setCounter(counter+value);
  } 
   return <div>
      <h2>Counter : {counter}</h2>
    <button onClick = {()=>clickFun(1)}>ADD</button>
    <button onClick = {()=>clickFun(-1)}>DEC</button>
    <button onClick = {()=>clickFun(+2)}>Dobule</button>
   </div>
}