import { css, styled } from "styled-components";
import { useThemeContext } from "../../../contexts/ThemeContext";

type InvoiceItemStatusProps = {
  status?: "paid" | "pending" | "draft";
  $variant?: string;
};

type InvoiceStyledType = {
  $variant?: string;
  theme: boolean;
};

const InvoiceItemStatus = ({ status, $variant }: InvoiceItemStatusProps) => {
  const { theme } = useThemeContext();

  return (
    <InvoiceItemStatusStyled $variant={$variant} theme={theme}>
      <span className="dot"></span>
      <span className="status-name">{status}</span>
    </InvoiceItemStatusStyled>
  );
};

export default InvoiceItemStatus;

const InvoiceItemStatusStyled = styled.div<InvoiceStyledType>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 104px;
  height: 40px;

  gap: 8px;
  margin-right: 20px;
  border-radius: 6px;

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #33d69f;
  }

  .status-name {
    font-size: 15px;
    font-weight: 700;
  }

  ${({ $variant }) => $variant && variant[$variant]}
`;

const pending = css`
  color: #ff8f00;
  background-color: rgba(255, 143, 0, 0.1);

  .dot {
    background-color: #ff8f00;
  }
`;

const draft = css`
  color: #373b53;
  background-color: rgba(55, 59, 83, 0.1);
  color: ${({ theme }) => (theme === true ? "#DFE3FA" : "373B53")};

  .dot {
    background-color: #373b53;
    background-color: ${({ theme }) => (theme === true ? "#DFE3FA" : "#373b53")};
  }
`;

const paid = css`
  background-color: #33d69f0d;
  color: #33d69f;

  .dot {
    background-color: #33d69f;
  }
`;

const variant: { [key: string]: ReturnType<typeof css> } = {
  pending,
  draft,
  paid,
};
