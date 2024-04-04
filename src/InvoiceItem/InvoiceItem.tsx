import { styled } from "styled-components";
import { useThemeContext } from "../contexts/ThemeContext.tsx";
import { InvoiceType } from "../types/InvoiceType.ts";
import InvoiceItemStatus from "./components/InvoiceItemStatus/InvoiceItemStatus.tsx";

type InvoiceItemProps = {
  invoice: InvoiceType;
  handleOnClick: (id: string) => void;
};

type InvoiceStyleType = {
  theme: boolean;
};

const InvoiceItem = ({ invoice, handleOnClick }: InvoiceItemProps) => {
  const { theme } = useThemeContext();

  return (
    <InvoiceItemStyled
      onClick={() => handleOnClick(invoice?.id as string)}
      theme={theme}
    >
      <span className="id">
        #<span>{invoice.id}</span>
      </span>
      <span className="due-date">Due {invoice.paymentDue}</span>
      <span className="client-name">{invoice.clientName}</span>
      <span className="price">£ {invoice.total?.toFixed(2)}</span>
      <InvoiceItemStatus status={invoice.status} $variant={invoice.status} />
      <img src="/assets/icon-arrow-right.svg" alt="" />
    </InvoiceItemStyled>
  );
};

export default InvoiceItem;

const InvoiceItemStyled = styled.div<InvoiceStyleType>`
  width: 730px;
  background-color: ${({ theme }) => (theme === true ? "#1E2139" : "#ffffff")};
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  padding: 16px 24px 16px 32px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: border-color 0.3s;

  &:hover {
    border-color: #7c5dfa;
  }

  .id {
    display: flex;
    align-items: center;
    color: #7e88c3;
    font-weight: 700;
    font-size: 15px;
    margin-right: 44px;
    width: 61px;

    span {
      color: ${({ theme }) => (theme === true ? "#ffffff" : "#0C0E16")};
    }
  }

  .due-date {
    display: flex;
    align-items: center;
    color: ${({ theme }) => (theme === true ? "#DFE3FA" : "#7e88c3")};
    font-size: 13px;
    width: 90px;
    margin-right: 60px;
  }

  .client-name {
    display: flex;
    align-items: center;
    color: ${({ theme }) => (theme === true ? "#ffffff" : "#858bb2")};
    font-size: 13px;
    display: inline-flex;
    flex: 1;
  }

  .price {
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 700;
    color: #0c0e16;
    color: ${({ theme }) => (theme === true ? "#ffffff" : "#0c0e16")};
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
