import {styled} from "styled-components";
import {useNavigate, useParams} from "react-router-dom";
import {
    useInvoiceContext
} from "../../contexts/InvoiceContext.tsx";
import BackButton
    from "../../components/BackButton/BackButton.tsx";
import {InvoiceType} from "../../types/InvoiceType.ts";
import StatusBar
    from "../../components/StatusBar/StatusBar.tsx";

const InvoiceDetails = () => {
    const {id} = useParams();
    const {invoices} = useInvoiceContext();
    const navigate = useNavigate();

    const invoice = invoices.find((item: InvoiceType) => item.id === id);
    console.log(invoice);

    const handleOnClick = () => {
        navigate("/");
    };

    return (
        <InvoiceDetailsStyled>
            <BackButton onClick={handleOnClick}/>
            <StatusBar invoice={invoice}/>
        </InvoiceDetailsStyled>
    );
};

export default InvoiceDetails;

const InvoiceDetailsStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    min-height: 100vh;
    width: 730px;
    margin: 0 auto;
    gap: 24px;


`;