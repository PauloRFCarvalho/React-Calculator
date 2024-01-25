import { InputContainer } from "./sytles";

const Input = ({value}) => {
  return(
    <InputContainer>
      <input disabled value={value}/>
      
    </InputContainer>
  )
}

export default Input;