import {styled} from "styled-components";
import InvoiceItemStatus
    from "../../InvoiceItem/components/InvoiceItemStatus/InvoiceItemStatus.tsx";
import Button from "../ui/Button/Button.tsx";
import {InvoiceType} from "../../types/InvoiceType.ts";

type StatusBarProps = {
    invoice?: InvoiceType
}

const StatusBar = ({invoice}: StatusBarProps) => {
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
                />
                <Button
                    title="Mark as Paid"
                    $variant="paid"
                />
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