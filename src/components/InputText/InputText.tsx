import { ReactNode } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import styled, { css } from "styled-components";
import { useThemeContext } from "../../contexts/ThemeContext";

type InputTextType = {
  label: string;
  icon?: ReactNode;
  readOnly?: boolean;
  name: string;
  register?: UseFormRegister<FieldValues>;
  $size?: string;
  $variant?: string;
};

const InputText = ({
  label = "label",
  icon,
  readOnly = false,
  name,
  register,
  $size,
  $variant,
}: InputTextType) => {
  const { theme } = useThemeContext();
  return (
    <InputTextStyled $size={$size} $variant={$variant} theme={theme}>
      <label htmlFor="">{label}</label>
      <div className="input-group">
        <input type="text" readOnly={readOnly} {...register?.(name)} />

        {icon && icon}
      </div>
    </InputTextStyled>
  );
};

export default InputText;

const InputTextStyled = styled.div<{
  $size?: string;
  $variant?: string;
  theme: boolean;
}>`
  display: inline-flex;
  flex-direction: column;
  gap: 9px;

  label {
    color: #7e88c3;
    color: ${({ theme }) => (theme === true ? "#DFE3FA" : "#7e88c3")};
    font-size: 13px;
    font-weight: 500;
  }

  .input-group {
    display: flex;
    position: relative;

    img {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
    }

    input {
      padding: 18px 20px;
      font-size: 15px;
      font-weight: 700;
      border: 1px solid
        ${({ theme }) => (theme === true ? "#1E2139" : "#dfe3fa")};
      border-radius: 4px;
      outline: none;
      width: 100%;
      background-color: ${({ theme }) => (theme === true ? "#1E2139" : "#fff")};

      &:focus {
        border-color: #7c5dfa;
      }
    }

    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px
        ${({ theme }) => (theme === true ? "#1E2139" : "#fff")} inset !important;
    }
  }

  ${({ $size }) => $size && size[$size]}
  ${({ $variant }) => $variant == "button" && button}
`;

const fullWidth = css`
  width: 100%;
`;

const oneThird = css`
  width: 31%;
`;

const size: { [key: string]: ReturnType<typeof css> } = {
  ["full-width"]: fullWidth,
  ["one-third"]: oneThird,
};

const button = css`
  input {
    cursor: pointer;
  }
`;
