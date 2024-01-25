import Button from "./components/Button";
import Input from "./components/Input";
import { Container, Content, Row } from "./styles";
import {useState} from "react";

//import Button from "./components/Button";
const App = () => {
    const [currentNumber, setCurrentNumber] = useState('0');
    const [firstNumber, setFirstNumber] = useState('0');
    const[operation, setOperation] = useState('0');

    const handleOnClear = () => {
      setCurrentNumber('0')
      setFirstNumber('0')
      setOperation('')
    };
    const handleAddNUmnber = (number) => {
      setCurrentNumber(prev => {
        // Se o número atual for '0', substitua-o pelo novo número
        if (prev.trim() === '0') {
          return number;
        } else {
          // Caso contrário, concatene o novo número
          return prev.trim() + number;
        }
      });
    };
    const handleSumNumbers = () => {
      if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')

      }else{
        const sum = Number(firstNumber) + Number(currentNumber);
        setCurrentNumber(String(sum));
      }
    }
    const handleEquals = () => {
      if(firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
            case '-':
              handleMinusNumbers();
              break;
            default:
            break;
        }

      }
    }
    const handleMinusNumbers = () => {
      if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')

      }else{
        const sum = Number(firstNumber) - Number(currentNumber);
        setCurrentNumber(String(sum));
      }
    }
    return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
         <Button label="X"/>
         <Button label="/"/>
         <Button label="C" onClick={handleOnClear}/>
         <Button label="X"/>
        </Row>
        <Row>
         <Button label="7" onClick={() => handleAddNUmnber('7')}/>
         <Button label="8" onClick={() => handleAddNUmnber('8')}/>
         <Button label="9" onClick={() => handleAddNUmnber('9')}/>
         <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
         <Button label="4" onClick={() => handleAddNUmnber('4')}/>
         <Button label="5" onClick={() => handleAddNUmnber('5')}/>
         <Button label="6" onClick={() => handleAddNUmnber('6')}/>
         <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
         <Button label="1" onClick={() => handleAddNUmnber('1')}/>
         <Button label="2" onClick={() => handleAddNUmnber('2')}/>
         <Button label="3" onClick={() => handleAddNUmnber('3')}/>
         <Button label="=" onClick={handleEquals} />
        </Row>
        

      </Content>
    </Container>
  );
}

export default App;
