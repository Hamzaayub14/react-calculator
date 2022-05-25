import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
function App() {
  const [calc,setCalc] = useState("");
  const [result,setResult] = useState("");
  const ops = ['/','*','-','+','.'];
  const updateCalc = value =>{
    if (
      ops.includes(value) && calc ==='' ||
      ops.includes(value) && ops.includes(calc.slice(-1)
      )
    ) {return;}
    
    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }
  const createDigits = ()=>{
    const digits = [];
    for (let i = 9 ; i > 0;--i){
      digits.push(
        <button
         onClick={()=> updateCalc(i.toString())} 
         key ={i}>{i}
         </button>
      )
    }
    return digits
  }
  const calculate = ()=>{
    setCalc(eval(calc).toString());
  }
  const clear = ()=>{
    if(calc == ""){
      return;
  }
  const value = calc.slice(0,-1);
  setCalc(value)
}
  const Delete = ()=>{
  const value = calc.slice(0,-calc.length);
  setCalc(value)
  }
  return (
    <div className="App">
     <div className="calculator">
       <div className="display">
      {result ? <span></span> :''}
      {calc || "0"}

       </div>
<div className="operator">
  <button onClick={()=> updateCalc('/')}>/</button>
  <button onClick={()=> updateCalc('*')}>*</button>
  <button onClick={()=> updateCalc('+')}>+</button>
  <button onClick={()=> updateCalc('-')}>-</button>
  <button onClick={Delete}>AC</button>
  <button className='erase' onClick={clear}><FontAwesomeIcon icon={faDeleteLeft} /></button>
     
</div>
   
    <div className="digits">
    {/* <button onClick={()=> updateCalc('%')}>%</button> */}
    { createDigits() }
      <div className='equals'>
    <button onClick={()=> updateCalc('.')}>.</button>
    <button onClick={()=> updateCalc('0')}>0</button>
   
    <button onClick={calculate}>=</button>
  
    </div>

    </div>
     </div>
      </div>
  );
  }

export default App;
