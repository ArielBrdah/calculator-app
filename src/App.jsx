import { useState } from 'react';
import './App.css'

function App() {

  const [sum, setSum] = useState(0)
  const [number, setNumber] = useState(0)
  const [op, setOp] = useState([])


  const add  =  (a, b) => a + b;
  const sub  =  (a, b) => a - b;
  const mul  =  (a, b) => a * b;
  const div  =  (a, b) => a / b;

  const total = (a,b) => {
    switch(op) {
      case "+":
        return add(a,b);
      case "-":
        return sub(a,b);
      case "*":
        return mul(a,b);
      case "/":
        return div(a,b);
    }
  }
  const operation = (key) => {
    console.log({sum,key,number,op})

    if( key == "=") {
      setSum(total(sum, number))
      setOp("");
      setNumber(0)
      return;
    }
    if(key >= 0 && key <= 9) {
      setNumber(parseInt(number + "" + key));
      return;
    }

    if( key == "Clear") {
      setNumber(0)
      setOp("")
      setSum(0)
      return;
    }
    if( key == "+" || key == "-" || key == "/" || key == "*")  {
      setOp(key)
      setSum(sum + number)
      setNumber(0)
      return;
    }   
  }

  return (
    <>
      <div className="calculator__container">
        <h2>Calculator app</h2>
        <div className="calculator__box">
          <div className="calculator__screen">
            <div><small>number:</small>{number}</div>
            <div><small>sum:</small>{sum}</div>  
          </div>
          <div className="calculator__keyboard">
            {
              [1,2,3,"+",4,5,6,"-",7,9,8,"*","/",0,".","=","Clear"].map( itm => {
              
                return <button onClick={ () => operation(itm) } className='calculator__key'>{itm}</button>

              })
            }
          </div>
        </div>
      </div>
   </>
  )
}

export default App
