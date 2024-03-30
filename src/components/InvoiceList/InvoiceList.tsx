import {styled} from "styled-components";
import InvoiceItem from "../../InvoiceItem/InvoiceItem.tsx";
import {
    useInvoiceContext
} from "../../contexts/InvoiceContext.tsx";
import {useNavigate} from "react-router-dom";

const InvoiceList = () => {
    const navigate = useNavigate();
    // const {invoices, selectedFilter} = useInvoiceContext();
const {filteredInvoices} = useInvoiceContext()
    // const filteredInvoices = invoices.filter((invoice) => {
    //     if(selectedFilter !== "") {
    //         return invoice.status === selectedFilter;
    //
    //     }
    //     return invoice;
    // });
    const handleOnClick = (id: string) => {
        navigate(`/${id}`);
    };

    return (
        <InvoiceListStyled>
            {filteredInvoices?.map((invoice) => (
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