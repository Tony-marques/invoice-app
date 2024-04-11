import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { useModalContext } from "../../contexts/ModalContext.tsx";
import { useThemeContext } from "../../contexts/ThemeContext.tsx";
import { InvoiceType } from "../../types/InvoiceType.ts";
import Form from "../Form/Form.tsx";

type EditInvoiceModalStyled = {
  theme: boolean;
};

type EditInvoiceModalProps = {
  invoice: InvoiceType;
};

const EditInvoiceModal = ({ invoice }: EditInvoiceModalProps) => {
  const { modalRef, showModal } = useModalContext();
  const { handleSubmit, reset, register } = useForm();
  const { theme } = useThemeContext();

  const closeModal = (e: React.MouseEvent<HTMLDialogElement>) => {
    e.stopPropagation();
    showModal();
  };

  const handleDiscard = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    reset();
    showModal();
  };

  return (
    <EditInvoiceModalStyled ref={modalRef} onClick={closeModal} theme={theme}>
      <div onClick={(e) => e.stopPropagation()}>
        <div className="title">Edit #{invoice?.id}</div>
        <div className="bill-from">Bill From</div>
        <Form
          handleDiscard={handleDiscard}
          reset={reset}
          register={register}
          handleSubmit={handleSubmit}
          invoice={invoice}
        />
      </div>
    </EditInvoiceModalStyled>
  );
};

export default EditInvoiceModal;

const EditInvoiceModalStyled = styled.dialog<EditInvoiceModalStyled>`
  width: calc(100% - 103px);
  position: fixed;
  top: 0;
  left: 103px;
  height: 100vh;
  min-height: 100vh;
  border: none;
  display: none;
  flex-direction: column;
  background-color: #00000080;
  z-index: 20;

  &[open] {
    display: flex;
  }

  & > div {
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => (theme === true ? "#141625" : "#fff")};
    width: 616px;
    padding: 59px 56px;
    padding-right: 33px;
    padding-bottom: 32px;
    height: 100%;
    border-radius: 0 20px 20px 0;
    position: relative;

    .title {
      color: ${({ theme }) => (theme === true ? "#fff" : "#141625")};
      font-weight: 700;
      font-size: 24px;
      margin-bottom: 46px;
    }

    .bill-from {
      margin-bottom: 24px;
    }

    .bill-from,
    .bill-to {
      color: #7c5dfa;
      font-size: 15px;
      font-weight: 700;
    }
  }
`;
