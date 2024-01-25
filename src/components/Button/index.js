import { ButtonContainer } from "./sytles";

const Button =  ({label, onClick}) => {
    return (
      <ButtonContainer onClick={onClick} type="button">
        {label}
    
      </ButtonContainer>
    );
  }
  
  export default Button;
  