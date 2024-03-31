import {styled} from "styled-components";
import InvoiceItemStatus
    from "../../InvoiceItem/components/InvoiceItemStatus/InvoiceItemStatus.tsx";
import Button from "../ui/Button/Button.tsx";
import {InvoiceType} from "../../types/InvoiceType.ts";
import {useNavigate} from "react-router-dom";
import {
    useInvoiceContext
} from "../../contexts/InvoiceContext.tsx";

type StatusBarProps = {
    invoice?: InvoiceType
}

const StatusBar = ({invoice}: StatusBarProps) => {

    const {deleteInvoice, changeStatusToPaid} = useInvoiceContext();
    const navigate = useNavigate();

    const handleDelete = () => {
        deleteInvoice(invoice?.id as string);
        navigate("/");
    };

    const handlePaid = () => {
        changeStatusToPaid(invoice?.id)
    }

    return (
        <StatusBarStyled>
            <div className="status-container">
                <span className="status">Status</span>
                <InvoiceItemStatus
                    status={invoice?.status}
                    $variant={invoice?.status}
                />
            </div>
            <div className="button-container">
                <Button
                    title="Edit"
                    $variant="edit"
                />
                <Button
                    title="Delete"
                    $variant="remove"
                    onClick={handleDelete}
                />
                {invoice?.status !== "paid" && <Button
                    title="Mark as Paid"
                    $variant="paid"
                    onClick={handlePaid}
                />}

            </div>
        </StatusBarStyled>
    );
};

export default StatusBar;

const StatusBarStyled = styled.div`
    margin-top: 7px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    padding: 24px 32px;
    border-radius: 8px;

    .status-container {
        display: flex;
        gap: 20px;
        align-items: center;


        .status {
            display: flex;
            height: max-content;
            color: #858BB2;
        }
    }

    .button-container {
        display: flex;
        gap: 8px;
    }
`;