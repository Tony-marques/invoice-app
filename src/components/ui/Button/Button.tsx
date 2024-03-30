import {css, styled} from "styled-components";

type ButtonProps = {
    title: "Edit" | "Delete" | "Mark as Paid";
    $variant: "edit" | "remove" | "paid";
}

type StyleProps = {
    $variant: "edit" | "remove" | "paid";
}

const Button = ({title, $variant}: ButtonProps) => {
    return (
        <ButtonStyled $variant={$variant}>
            {title}
        </ButtonStyled>
    );
};

export default Button;

const ButtonStyled = styled.div<StyleProps>`
    padding: 16px 24px;
    font-weight: 700;
    font-size: 15px;
    border-radius: 24px;
    cursor: pointer;

    ${({$variant}) => $variant && variant[$variant]}
}
`;

const edit = css`
    background-color: #F9FAFE;
    color: #7E88C3;
`;

const remove = css`
    background-color: #EC5757;
    color: white;
`;

const paid = css`
    background-color: #7C5DFA;
    color: white;
`;

const variant: { [key: string]: ReturnType<typeof css> } = {
    edit,
    remove,
    paid
};