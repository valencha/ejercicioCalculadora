import React from 'react';
import './App.css';
import Button from '../Button/Button';
import Display from '../Display/Display';



function App() {
  const [ currentDisplay, setCurrentDisplay] = React.useState('0');
  const [ formulaDisplay, setFormulaDisplay] = React.useState('');
  const [ isReady, setIsReady] = React.useState(true);
  const [ result, setResult] = React.useState(false);
  function handleNumber(number){
    //si solo hay cero en el current 
    if ( currentDisplay === '0'){
      //reemplazo el cero por el numero recibido
      setCurrentDisplay(number);
    }else{
      //Concateno los numeros
      setCurrentDisplay(currentDisplay + number); 
    }
    //avisamos que estamos ready
    setIsReady(true);
  }
  
  function handleOperation(operation){
    // solo si estamos listos para operar
    if(isReady){
      // concatenamos la operacion anterior con la siguiente
      setFormulaDisplay(formulaDisplay + ' ' + currentDisplay+ ' ' + operation);
      
      if(result === false){
        setResult(parseFloat(currentDisplay));
      }else{
        setResult(operate(result, formulaDisplay.substr(-1),currentDisplay ));
      }
      
      // devolvemos el valor del display 0
      setCurrentDisplay ('0');
      //avisamos que no estamos listos
      setIsReady(false);
    }
    
  }

  function handleEquals (){
    setResult(operate(result, formulaDisplay.substr(-1),currentDisplay ));
    setFormulaDisplay('');
    setCurrentDisplay('0');
   
    setIsReady(false);
  }
  
  return (
    <div className="App">
    <Display
    formula = {formulaDisplay} current={ isReady ? currentDisplay : result}
    />
    
    <section className="Keyboard">
    <Button type = "controller" value="CE" />
    <Button type = "controller" value="C" />
    <Button type = "controller" value="←" />
    <Button type = "operation" onClick= {handleOperation}  value="÷" />
    
    <Button type = "number" onClick= {handleNumber} value="7" />
    <Button type = "number" onClick= {handleNumber} value="8" />
    <Button type = "number" onClick= {handleNumber} value="9" />
    <Button type = "operation" onClick= {handleOperation} value="X" />
    
    <Button type = "number" onClick= {handleNumber} value="4" />
    <Button type = "number" onClick= {handleNumber} value="5" />
    <Button type = "number" onClick= {handleNumber} value="6" />
    <Button type = "operation" onClick= {handleOperation} value="-" />
    
    <Button type = "number" onClick= {handleNumber} value="1" />
    <Button type = "number" onClick= {handleNumber} value="2" />
    <Button type = "number" onClick= {handleNumber} value="3" />
    <Button type = "operation" onClick= {handleOperation} value="+" />
    
    <Button type = "controller" value="±" />
    <Button type = "number" onClick= {handleNumber} value="0" />  
    <Button type = "controller" value="," />
    <Button type = "operation" onClick= {handleEquals} value="=" />
    </section>
    
    </div>
    );
    
  }
  
  function operate (a, operation, b){
    a = parseFloat(a);
    b = parseFloat(b);
    switch(operation){
      case '+':
      return(a + b);
      
      case 'X':
      return(a * b);
    
      case '-':
      return(a - b);

      case '÷':
      return(a / b);

      default:
        return b;
    
    }
    
    
    
  }
  
  export default App;
  