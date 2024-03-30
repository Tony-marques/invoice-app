import {styled} from "styled-components";
import MainContainer
    from "../../components/MainContainer/MainContainer.tsx";
import CreateInvoiceModal
    from "../../components/CreateInvoiceModal/CreateInvoiceModal.tsx";
import {useInvoice} from "../../hooks/useInvoice.ts";

const Invoices = () => {
    const {invoices} = useInvoice()
    console.log(invoices);
    return (
        <InvoicesStyled>
            <CreateInvoiceModal/>
            <MainContainer/>
        </InvoicesStyled>
    );
};

export default Invoices;

const InvoicesStyled = styled.div`
    display: flex;
    position: relative;
    min-height: 100vh;
    flex-grow: 1;
`;