import {styled} from "styled-components";
import {useNavigate, useParams} from "react-router-dom";
import {
    useInvoiceContext
} from "../../contexts/InvoiceContext.tsx";
import BackButton
    from "../../components/BackButton/BackButton.tsx";
import InvoiceItemStatus
    from "../../InvoiceItem/components/InvoiceItemStatus/InvoiceItemStatus.tsx";
import {InvoiceType} from "../../types/InvoiceType.ts";
import Button from "../../components/ui/Button/Button.tsx";

const InvoiceDetails = () => {
    const {id} = useParams()
    const {invoices} = useInvoiceContext()
    const navigate = useNavigate()

    const invoice = invoices.find((item: InvoiceType) => item.id === id)
    console.log(invoice);

    const handleOnClick = () => {
        navigate("/")
    }

    return (
        <InvoiceDetailsStyled>
           <BackButton onClick={handleOnClick}/>
            <div className="status-bar">
                <div className="status-container">
                    <span className="status">Status</span>
                    <InvoiceItemStatus status={invoice?.status} $variant={invoice?.status}/>
                </div>
                <div className="button-container">
                    <Button title="Edit" $variant="edit"/>
                    <Button title="Delete" $variant="remove"/>
                    <Button title="Mark as Paid" $variant="paid"/>
                </div>
            </div>
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
    
    .status-bar{
        margin-top: 7px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: white;
        padding: 24px 32px;
        border-radius: 8px;
        
        .status-container{
            display: flex;
            gap: 20px;
            align-items: center;
            
            
            .status{
                display: flex;
                height: max-content;
                color: #858BB2;
            }
        }
        
        .button-container{
            display: flex;
            gap: 8px;
        }
    }
`;