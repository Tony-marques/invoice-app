import { css, styled } from "styled-components";
import { useThemeContext } from "../../../contexts/ThemeContext";

type ButtonProps = {
  title: "Edit" | "Delete" | "Mark as Paid";
  onClick?: () => void;
  $variant: "edit" | "remove" | "paid";
};

type StyleProps = {
  $variant: "edit" | "remove" | "paid";
  theme: boolean;
};

const Button = ({ title, onClick, $variant }: ButtonProps) => {
  const {theme} = useThemeContext();
  return (
    <ButtonStyled $variant={$variant} onClick={onClick} theme={theme}>
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

    ${({ $variant }) => $variant && variant[$variant]}
`;

const edit = css`
  background-color: ${({theme}) => theme === true ? "#252945" : "#f9fafe"};
  color: #7e88c3;
`;

const remove = css`
  background-color: #ec5757;
  color: white;
`;

const paid = css`
  background-color: #7c5dfa;
  color: white;
`;

const variant: { [key: string]: ReturnType<typeof css> } = {
  edit,
  remove,
  paid,
};
