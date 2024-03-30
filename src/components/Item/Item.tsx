import {styled} from "styled-components";

interface ItemProps {
    name,
    price,
    quantity,
    total
}

const Item = ({name, price, quantity, total, register, index}: ItemProps) => {



    return (
        <ItemStyled>
            <input
                name="name"
                type="text"
                {...register(`items[${index}].name`)}
                defaultValue={name}
            />
            <input
                name="quantity"
                type="text"
                {...register(`items[${index}].quantity`)}
                defaultValue={quantity}


            />
            <input
                name="price"
                type="text"
                {...register(`items[${index}].price`)}
                defaultValue={price}

            />
            {total}
        </ItemStyled>
    );
};

export default Item;

const ItemStyled = styled.div`

`;