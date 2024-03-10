import {styled} from "styled-components";
import SideBar from "../../components/SideBar/SideBar.tsx";
import MainContainer
    from "../../components/MainContainer/MainContainer.tsx";
import {
    useModalContext
} from "../../contexts/ModalContext.tsx";
import CreateInvoiceModal
    from "../../components/CreateInvoiceModal/CreateInvoiceModal.tsx";

const Invoices = () => {
    const {showCreateInvoiceForm} = useModalContext()
    return (
        <InvoicesStyled>
            <SideBar/>
            {showCreateInvoiceForm && <CreateInvoiceModal/>}
            <MainContainer/>
        </InvoicesStyled>
    );
};

export default Invoices;

const InvoicesStyled = styled.div`
    display: flex;
    position: relative;
`;