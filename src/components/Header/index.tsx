import { HeaderContainer } from "./styles";
import todoLogo from "../../assets/todoLogo.svg";

export function Header() {
    return (
        <HeaderContainer>
            <img src={todoLogo}/>
        </HeaderContainer>
    )
}