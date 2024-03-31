import {styled} from "styled-components";

type ItemProps = {
    name: string;
    price: number;
    quantity: number;
    total: number;
    register: any;
    index: number;
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