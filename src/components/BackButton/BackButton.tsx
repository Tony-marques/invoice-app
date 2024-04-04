import {styled} from "styled-components";
import { useThemeContext } from "../../contexts/ThemeContext";

type BackButtonProps = {
    onClick: () => void;
}

type BackButtonStyled = {
    theme: boolean
}

const BackButton = ({onClick}: BackButtonProps) => {
    const {theme} = useThemeContext()
    return (
        <BackButtonStyled onClick={onClick} theme={theme}>
            <img
                src="/assets/icon-arrow-left.svg"
                alt=""
            />
            <span>Go back</span>
        </BackButtonStyled>
    );
};          

export default BackButton;

const BackButtonStyled = styled.div<BackButtonStyled>`
    cursor: pointer;
    display: flex;
    height: max-content;
    align-items: center;
    gap: 23px;
    //border: 1px solid red;
    width: max-content;

    span {
        font-weight: 700;
        font-size: 15px;
        display: flex;
        align-items: center;
        color: ${({theme})  => theme === true ? "#fff" : "black"};
    }
`;