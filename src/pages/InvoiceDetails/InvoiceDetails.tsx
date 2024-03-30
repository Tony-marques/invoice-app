import {styled} from "styled-components";
import {useNavigate, useParams} from "react-router-dom";
import {
    useInvoiceContext
} from "../../contexts/InvoiceContext.tsx";
import BackButton
    from "../../components/BackButton/BackButton.tsx";

const InvoiceDetails = () => {
    const {id} = useParams()
    const {invoices} = useInvoiceContext()
    const navigate = useNavigate()

    const invoice = invoices.find((item) => item.id === id)
    console.log(invoice);

    const handleOnClick = () => {
        navigate("/")
    }

    return (
        <InvoiceDetailsStyled>
           <BackButton onClick={handleOnClick}/>
        </InvoiceDetailsStyled>
    );
};

export default InvoiceDetails;

const InvoiceDetailsStyled = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    min-height: 100vh;
    width: 730px;
    margin: 0 auto;
`;