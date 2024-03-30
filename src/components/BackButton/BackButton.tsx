import {styled} from "styled-components";

type BackButtonProps = {
    onClick: () => void;
}

const BackButton = ({onClick}: BackButtonProps) => {
    return (
        <BackButtonStyled onClick={onClick}>
            <img
                src="/assets/icon-arrow-left.svg"
                alt=""
            />
            <span>Go back</span>
        </BackButtonStyled>
    );
};

export default BackButton;

const BackButtonStyled = styled.div`
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
    }
`;