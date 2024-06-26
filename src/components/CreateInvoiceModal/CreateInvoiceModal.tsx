import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { useInvoiceContext } from "../../contexts/InvoiceContext.tsx";
import { useModalContext } from "../../contexts/ModalContext.tsx";
import { useThemeContext } from "../../contexts/ThemeContext.tsx";
import { InvoiceType } from "../../types/InvoiceType.ts";
import Form from "../Form/Form.tsx";

type CreateInvoiceModalStyled = {
  theme: boolean;
};

const CreateInvoiceModal = () => {
  const { modalRef, showModal } = useModalContext();
  const { handleSubmit, reset, register } = useForm();
  const { saveAsDraft } = useInvoiceContext();
  const { theme } = useThemeContext();

  const closeModal = (e: React.MouseEvent<HTMLDialogElement>) => {
    e.stopPropagation();
    showModal();
  };

  const handleDiscard = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    reset();
    showModal();
    console.log("ici");
  };

  const handleSaveAsDraft = (data: InvoiceType) => {
    saveAsDraft(data);
    reset();
    showModal();
  };

  return (
    <CreateInvoiceModalStyled ref={modalRef} onClick={closeModal} theme={theme}>
      <div onClick={(e) => e.stopPropagation()}>
        <div className="title">New Invoice</div>
        <div className="bill-from">Bill From</div>
        <Form
          handleDiscard={handleDiscard}
          handleSaveAsDraft={handleSaveAsDraft}
          reset={reset}
          register={register}
          handleSubmit={handleSubmit}
        />
      </div>
    </CreateInvoiceModalStyled>
  );
};

export default CreateInvoiceModal;

const CreateInvoiceModalStyled = styled.dialog<CreateInvoiceModalStyled>`
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
    /* background-color: #fff; */
    background-color: ${({ theme }) => (theme === true ? "#141625" : "#fff")};
    width: 616px;
    padding: 59px 56px;
    padding-right: 33px;
    padding-bottom: 32px;
    height: 100%;
    border-radius: 0 20px 20px 0;
    /* overflow-y: scroll; */
    /* padding-bottom: 110px; */
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
