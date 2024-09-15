import { Button } from "../Button";
import { InputContainer, InputTask } from "./styles";

export function Input() {
    return (
        <div>
            <InputContainer>
                <InputTask  
                    type="text"
                    placeholder="  Adicione uma nova tarefa"/>
                <Button />
            </InputContainer>
        </div>
    )
}