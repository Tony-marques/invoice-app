import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import InvoiceItemStatus from "../../InvoiceItem/components/InvoiceItemStatus/InvoiceItemStatus.tsx";
import { useInvoiceContext } from "../../contexts/InvoiceContext.tsx";
import { useModalContext } from "../../contexts/ModalContext.tsx";
import { useThemeContext } from "../../contexts/ThemeContext.tsx";
import { InvoiceType } from "../../types/InvoiceType.ts";
import EditInvoiceModal from "../EditInvoiceModal/EditInvoiceModal.tsx";
import Button from "../ui/Button/Button.tsx";

type StatusBarProps = {
  invoice?: InvoiceType;
};

type StatusBarStyle = {
  theme: boolean;
};

const StatusBar = ({ invoice }: StatusBarProps) => {
  const { deleteInvoice, changeStatusToPaid } = useInvoiceContext();
  const { showModal } = useModalContext();
  const navigate = useNavigate();
  const { theme } = useThemeContext();

  const handleDelete = () => {
    deleteInvoice(invoice?.id as string);
    navigate("/");
  };

  const handleToggleModal = () => {
    showModal();
  };

  const handlePaid = () => {
    changeStatusToPaid(invoice?.id as string);
  };

  return (
    <StatusBarStyled theme={theme}>
      <div className="status-container">
        <span className="status">Status</span>
        <InvoiceItemStatus
          status={invoice?.status}
          $variant={invoice?.status}
        />
      </div>
      <div className="button-container">
        <Button title="Edit" $variant="edit" onClick={handleToggleModal} />
        <Button title="Delete" $variant="remove" onClick={handleDelete} />
        {invoice?.status !== "paid" && (
          <Button title="Mark as Paid" $variant="paid" onClick={handlePaid} />
        )}
      </div>
      <EditInvoiceModal invoice={invoice as InvoiceType} />
    </StatusBarStyled>
  );
};

export default StatusBar;

const StatusBarStyled = styled.div<StatusBarStyle>`
  margin-top: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  background-color: ${({ theme }) => (theme === true ? "#1E2139" : "#fff")};
  padding: 24px 32px;
  border-radius: 8px;

  .status-container {
    display: flex;
    gap: 20px;
    align-items: center;

    .status {
      display: flex;
      height: max-content;
      color: #858bb2;
    }
  }

  .button-container {
    display: flex;
    gap: 8px;
  }
`;
