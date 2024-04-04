import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import InvoiceItem from "../../InvoiceItem/InvoiceItem.tsx";
import { useInvoiceContext } from "../../contexts/InvoiceContext.tsx";

const InvoiceList = () => {
  const navigate = useNavigate();
  const { invoices } = useInvoiceContext();

  const handleOnClick = (id: string) => {
    navigate(`/${id}`);
  };

  return (
    <InvoiceListStyled>
      {invoices?.map((invoice) => (
        <InvoiceItem
          handleOnClick={handleOnClick}
          invoice={invoice}
          key={invoice.id}
        />
      ))}
    </InvoiceListStyled>
  );
};

export default InvoiceList;

const InvoiceListStyled = styled.div`
  //border: 1px solid blue;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
