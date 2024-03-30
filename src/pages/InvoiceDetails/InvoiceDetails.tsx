import {styled} from "styled-components";
import {useNavigate, useParams} from "react-router-dom";
import {
    useInvoiceContext
} from "../../contexts/InvoiceContext.tsx";

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
            {/*{id}*/}
            <div className="back-button" onClick={handleOnClick}>
                <img
                    src="/assets/icon-arrow-left.svg"
                    alt=""
                />
                <span>Go back</span>
            </div>
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
    
    .back-button{
        cursor: pointer;
        display: flex;
        height: max-content;
        align-items: center;
        gap: 23px;
        border: 1px solid red;
        
        span{
            font-weight: 700;
            font-size: 15px;
            display: flex;
            align-items: center;
        }
    }
`;