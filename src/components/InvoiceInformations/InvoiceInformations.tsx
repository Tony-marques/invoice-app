import {styled} from "styled-components";
import {InvoiceType} from "../../types/InvoiceType.ts";
import {
    formatDate,
    formatPrice
} from "../../utils/functions.ts";

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
                    <span>{formatDate(invoice?.createdAt,"en-EN")}</span>
                </div>
                <div className="payment-due">
                    <span>Payment Due</span>
                    <span>{formatDate(invoice?.paymentDue,"en-EN")}</span>
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

            <div className="items-container">
                <div className="items-details">
                    <div className="header">
                        <div className="item-name">
                            Item Name
                        </div>
                        <div className="quantity">QTY.</div>
                        <div className="price">Price</div>
                        <div className="total">Total</div>
                    </div>

                    <div className="items-container">
                        {invoice?.items.map((item) => (
                            <div className="item">
                                <span className="name">{item.name}</span>
                                <span className="quantity">{item.quantity}</span>
                                <span className="price">£ {formatPrice(item.price, 2)}</span>
                                <span className="total">£ {formatPrice(item.total, 2)}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="amount">
                    <span>Amount Due</span>
                    <span>£ {formatPrice(invoice?.total, 2)}</span>
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

    .items-container {
        width: 100%;

        .items-details {
            margin-top: 44px;
            background-color: #F9FAFE;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            display: flex;
            flex-direction: column;
            flex-basis: 100%;
            //border: 1px solid red;
            padding: 33px;
            gap: 32px;

            .header {
                display: flex;
                width: 100%;

                .item-name {
                    flex-basis: 40%;
                    //border: 1px solid red;

                }

                .quantity,
                .price,
                .total {
                    display: flex;
                    justify-content: flex-end;
                    flex-basis: 20%;
                    //border: 1px solid red;
                }

                .item-name,
                .quantity,
                .price,
                .total {
                    font-weight: 500;
                    font-size: 13px;
                    color: #7E88C3;
                }
            }

            .items-container {
                display: flex;
                flex-direction: column;
                gap: 32px;

                .item {
                    //width: 100%;
                    display: flex;

                    .name {
                        flex-basis: 40%;
                        //border: 1px solid red;
                    }

                    .quantity,
                    .price,
                    .total {
                        display: flex;
                        justify-content: flex-end;
                        flex-basis: 20%;
                        //border: 1px solid red;
                    }

                    .name, .total, .price, .quantity {
                        font-weight: 700;
                        font-size: 15px;
                    }

                    .name, .total {
                        color: #0C0E16;

                    }

                    .price, .quantity {
                        color: #7E88C3;
                    }
                }

            }
        }

        .amount {
            padding: 32px;
            background-color: #373B53;
            color: white;
            display: flex;
            width: 100%;
            justify-content: space-between;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;

            :nth-child(1) {
                display: flex;
                align-items: center;
                font-size: 13px;
                font-weight: 500;
            }

            :nth-child(2) {
                display: flex;
                align-items: center;
                font-size: 24px;
                font-weight: 700;
            }
        }
    }

`;