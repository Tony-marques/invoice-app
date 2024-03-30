import {styled} from "styled-components";
import {InvoiceType} from "../../types/InvoiceType.ts";

type InvoiceInformationsProps = {
    invoice?: InvoiceType
}

const InvoiceInformations = ({invoice}: InvoiceInformationsProps) => {
    return (
        <InvoiceInformationsStyled>
            <div className="id">
                <div className="title">
                    <span>#</span>{invoice?.id}</div>
                <div className="description">{invoice?.description}</div>
            </div>
            <div className="sender-address">
                <div className="street">{invoice?.senderAddress.street}</div>
                <div className="city">{invoice?.senderAddress.city}</div>
                <div className="zip-code">{invoice?.senderAddress.postCode}</div>
                <div className="country">{invoice?.senderAddress.country}</div>
            </div>

            <div className="payment">
                <div className="invoice-date">
                    <span>Invoice Date</span>
                    <span>{invoice?.createdAt}</span>
                </div>
                <div className="payment-due">
                    <span>Payment Due</span>
                    <span>{invoice?.paymentDue}</span>
                </div>
            </div>

            <div className="bill">
                <div className="title">Bill To</div>
                <div className="name">{invoice?.clientName}</div>
                <div className="address">
                    <div className="street">{invoice?.clientAddress.street}</div>
                    <div className="city">{invoice?.clientAddress.city}</div>
                    <div className="zip-code">{invoice?.clientAddress.postCode}</div>
                    <div className="country">{invoice?.clientAddress.country}</div>
                </div>
            </div>

            <div className="sent">
                <div>
                    <div className="title">Sent To</div>
                    <div className="email">{invoice?.clientEmail}</div>
                </div>
            </div>
        </InvoiceInformationsStyled>
    );
};

export default InvoiceInformations;

const InvoiceInformationsStyled = styled.div`
    background-color: white;
    padding: 50px 48px;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    row-gap: 21px;

    .id {
        display: flex;
        flex-direction: column;
        flex-basis: 50%;
        //border: 1px solid red;
        gap: 7px;

        .title {
            color: #0C0E16;
            font-weight: 700;

            span {
                color: #888EB0;
            }
        }

        .description {
            font-weight: 500;
            color: #7E88C3;

        }
    }

    .sender-address {
        //border: 1px solid red;
        display: flex;
        flex-direction: column;
        flex-basis: 50%;
        align-items: flex-end;
        font-weight: 500;
        font-size: 13px;
        color: #7E88C3;
        line-height: 18px;
    }

    .payment {
        display: flex;
        flex-direction: column;
        flex-basis: 25%;
        //border: 1px solid red;
        gap: 31px;

        .invoice-date,
        .payment-due {
            display: flex;
            flex-direction: column;
            gap: 13px;
        }

        .invoice-date span:nth-child(1),
        .payment-due span:nth-child(1) {
            color: #7E88C3;
            font-weight: 500;
            font-size: 13px;
        }

        .invoice-date span:nth-child(2),
        .payment-due span:nth-child(2) {
            color: #0C0E16;
            font-weight: 700;
            font-size: 15px;
        }

    }

    .bill {
        display: flex;
        flex-direction: column;
        flex-basis: 25%;
        //border: 1px solid red;

        .title {
            color: #7E88C3;
            font-weight: 500;
            font-size: 13px;
        }

        .name {
            color: #0C0E16;
            font-weight: 700;
            font-size: 15px;
            margin-bottom: 7px;
            margin-top: 13px;
        }

        .address {
            color: #7E88C3;
            font-weight: 500;
            font-size: 13px;
            line-height: 18px;
        }
    }

    .sent {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-basis: 50%;
        //border: 1px solid red;

        div {
            display: flex;
            flex-direction: column;
            gap: 13px;

            .title {
                color: #7E88C3;
                font-weight: 500;
                font-size: 13px;
            }

            .email {
                color: #0C0E16;
                font-weight: 700;
                font-size: 15px;
            }
        }
    }

`;