import {styled} from "styled-components";
import {InvoiceType} from "../types/InvoiceType.ts";
import InvoiceItemStatus
    from "./components/InvoiceItemStatus/InvoiceItemStatus.tsx";

type InvoiceItemProps = {
    invoice: InvoiceType,
    handleOnClick: (id: string |undefined) => void;
}

const InvoiceItem = ({
    invoice,
    handleOnClick
}: InvoiceItemProps) => {
    return (
        <InvoiceItemStyled onClick={() => handleOnClick(invoice.id)}>
            <span className="id">#<span>{invoice.id}</span></span>
            <span className="due-date">Due {invoice.paymentDue}</span>
            <span className="client-name">{invoice.clientName}</span>
            {/*<span className="price">£ {invoice.items[0].total}</span>*/}
            <InvoiceItemStatus status={invoice.status} $variant={invoice.status}/>
            <img
                src="/assets/icon-arrow-right.svg"
                alt=""
            />
        </InvoiceItemStyled>
    );
};

export default InvoiceItem;

const InvoiceItemStyled = styled.div`
    width: 730px;
    background-color: #FFFFFF;
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
    padding: 16px 24px 16px 32px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;

    .id {
        display: flex;
        align-items: center;
        color: #7E88C3;
        font-weight: 700;
        font-size: 15px;
        margin-right: 44px;
        //display: inline-flex;
        width: 61px;

        span {
            color: #0C0E16;
        }
    }

    .due-date {
        display: flex;
        align-items: center;
        //display: inline-flex;
        color: #7E88C3;
        font-size: 13px;
        width: 90px;
        margin-right: 60px;
    }

    .client-name {
        display: flex;
        align-items: center;
        color: #858BB2;
        font-size: 13px;
        display: inline-flex;
        flex: 1;
    }

    .price {
        display: flex;
        align-items: center;
        font-size: 15px;
        font-weight: 700;
        color: #0C0E16;
        margin-right: 40px;
    }


    img {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4px;
        height: 8px;
    }
`;