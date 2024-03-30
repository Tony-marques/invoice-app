import {styled} from "styled-components";
import MainContainer
    from "../../components/MainContainer/MainContainer.tsx";
import CreateInvoiceModal
    from "../../components/CreateInvoiceModal/CreateInvoiceModal.tsx";

const Invoices = () => {
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
    width: 100%;
`;