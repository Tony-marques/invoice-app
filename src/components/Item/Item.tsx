import { styled } from "styled-components";
import { useThemeContext } from "../../contexts/ThemeContext";

type ItemProps = {
  name: string;
  price: number;
  quantity: number;
  total: number;
  register: any;
  index: number;
};

type ItemStyled = {
  theme: boolean;
};

const Item = ({ name, price, quantity, total, register, index }: ItemProps) => {
  const { theme } = useThemeContext();
  return (
    <ItemStyled theme={theme}>
      <input
        name="name"
        type="text"
        {...register(`items[${index}].name`)}
        defaultValue={name}
        className="name"
      />
      <input
        name="quantity"
        type="text"
        {...register(`items[${index}].quantity`)}
        defaultValue={quantity}
        className="quantity"
      />
      <input
        name="price"
        type="text"
        {...register(`items[${index}].price`)}
        defaultValue={price}
        className="price"
      />
      <div className="total">{total}</div>
    </ItemStyled>
  );
};

export default Item;

const ItemStyled = styled.div<ItemStyled>`
  display: flex;
  width: 100%;
  gap: 16px;
  input {
    padding: 20px;
    border-radius: 4px;
    background-color: ${({ theme }) =>
      theme === true ? "#1E2139" : "#FFFFFF"};
    color: ${({ theme }) => (theme === true ? "#fff" : "#0C0E16")};
    font-size: 15px;
    font-weight: 700;
    outline: none;
    border: 1px solid transparent;

    &:focus {
      border-color: #7c5dfa;
    }
  }

  input.name {
    width: 40%;

    /* border: 1px solid green; */
  }
  input.quantity {
    width: 10%;
    /* border: 1px solid green; */
  }
  input.price {
    width: 20%;
    /* border: 1px solid green; */
  }
  .total {
    width: 15%;
    /* border: 1px solid green; */
    display: flex;
    align-items: center;
    color: ${({ theme }) => (theme === true ? "#DFE3FA" : "#888EB0")};
    font-size: 15px;
    font-weight: 700;
  }
`;
