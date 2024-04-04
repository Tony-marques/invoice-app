import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { styled } from "styled-components";
import { useInvoiceContext } from "../../contexts/InvoiceContext.tsx";
import { useModalContext } from "../../contexts/ModalContext.tsx";
import { useThemeContext } from "../../contexts/ThemeContext.tsx";
import { InvoiceType } from "../../types/InvoiceType.ts";
import InputText from "../InputText/InputText.tsx";
import Item from "../Item/Item.tsx";

type CreateInvoiceModalStyled = {
  theme: boolean;
};

const CreateInvoiceModal = () => {
  const { modalRef, showModal } = useModalContext();
  const { handleSubmit, reset, register } = useForm();
  const { addInvoice } = useInvoiceContext();
  const { theme } = useThemeContext();
  const [items, setItems] = useState([]);

  const handleOnSubmit: SubmitHandler<InvoiceType> = (data: InvoiceType) => {
    console.log(data);

    addInvoice(data);
    reset();
    showModal();
  };

  const closeModal = (e) => {
    e.stopPropagation();
    console.log("test");

    showModal();
  };

  const addItemInput = (e) => {
    e.preventDefault();
    setItems((prev) => {
      return [
        {
          name: "",
          quantity: 0,
          price: 0,
          total: 0,
        },
        ...prev,
      ];
    });
  };

  return (
    <CreateInvoiceModalStyled ref={modalRef} onClick={closeModal} theme={theme}>
      <div onClick={(e) => e.stopPropagation()}>
        <div className="title">New Invoice</div>
        <div className="bill-from">Bill From</div>
        <form method="POST">
          <div className="form-content">
            <InputText
              label="Street Address"
              $size="full-width"
              register={register}
              name="senderAddress.street"
            />
            <InputText
              label="City"
              $size="one-third"
              register={register}
              name="senderAddress.city"
            />
            <InputText
              label="Post Code"
              $size="one-third"
              register={register}
              name="senderAddress.postCode"
            />
            <InputText
              label="Country"
              $size="one-third"
              register={register}
              name="senderAddress.country"
            />

            <div className="bill-to">Bill To</div>

            <InputText
              label="Client's Name"
              $size="full-width"
              register={register}
              name="clientName"
            />
            <InputText
              label="Client's Email"
              $size="full-width"
              register={register}
              name="clientEmail"
            />
            <InputText
              label="Street Address"
              $size="full-width"
              register={register}
              name="clientAddress.street"
            />
            <InputText
              label="City"
              $size="one-third"
              register={register}
              name="clientAddress.city"
            />
            <InputText
              label="Post Code"
              $size="one-third"
              register={register}
              name="clientAddress.postCode"
            />
            <InputText
              label="Country"
              $size="one-third"
              register={register}
              name="clientAddress.country"
            />
            <InputText
              label="Invoice Date"
              $size="half"
              icon={<img src="/assets/icon-calendar.svg" />}
              readOnly
              $variant="button"
              register={register}
              name="paymentDue"
            />
            <InputText
              label="Payment Terms"
              icon={<img src="/assets/icon-arrow-down.svg" />}
              readOnly
              $variant="button"
              register={register}
              name="paymentTerms"
            />
            <InputText
              label="Project Description"
              $size="full-width"
              register={register}
              name="description"
            />
            <div className="item-list">Item List</div>
            <div className="item-header">
              <div className="item-name">Item Name</div>
              <div className="item-quantity">Qty.</div>
              <div className="item-price">Price</div>
              <div className="item-total">Total</div>
            </div>
            <div className="items-container">
              {items?.map(({ name, quantity, price, total }, index) => {
                return (
                  <Item
                    key={index}
                    name={name}
                    quantity={quantity}
                    price={price}
                    total={total}
                    index={index}
                    register={register}
                  />
                );
              })}
            </div>

            <button onClick={addItemInput} className="add-new-item">
              + add new item
            </button>
          </div>
        </form>
        <div className="buttons-bottom">
          <button className="discard">Discard</button>

          <div className="buttons-right">
            <button className="save-as-draft">Save as Draft</button>
            <button
              className="save-send"
              onClick={handleSubmit(handleOnSubmit)}
            >
              Save & Send
            </button>
          </div>
        </div>
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
  /* row-gap: 25px; */

  &[open] {
    display: flex;
  }

  & > div {
    display: flex;
    flex-direction: column;
    /* background-color: #fff; */
    background-color: ${({ theme }) => (theme === true ? "#141625" : "#fff")};
    width: 719px;
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

  form {
    overflow-y: scroll;
    scrollbar-color: ${({ theme }) => (theme === true ? "#252945" : "#DFE3FA")}
      transparent;
    scrollbar-width: thin;
    /* border: 1px solid red; */
    padding-right: 15px;
    /* height: 100%; */
    /* padding-bottom: 5rem; */

    .form-content {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      justify-content: space-between;
      row-gap: 25px;
      /* border: 1px solid red; */
      /* overflow-y: hidden; */

      .bill-to {
        display: block;
        width: 100%;
      }
    }

    .items-container {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }
  }

  .item-list {
    font-size: 18px;
    color: #777f98;
    font-weight: 700;
    width: 100%;
    /* display: flex; */
  }

  .item-header {
    display: flex;
    gap: 16px;
    width: 100%;

    .item-name,
    .item-price,
    .item-quantity,
    .item-total {
      color: ${({ theme }) => (theme === true ? "#DFE3FA" : "#7E88C3")};
      font-weight: 500;
    }

    .item-name {
      width: 40%;
    }
    .item-quantity {
      width: 10%;
    }
    .item-price {
      width: 20%;
    }
    .item-total {
      width: 15%;
    }
  }

  .add-new-item {
    width: 100%;
    background-color: ${({ theme }) => (theme === true ? "#252945" : "#FFF")};
    font-size: 13px;
    padding: 16px;
    border-radius: 24px;
    cursor: pointer;
    color: ${({ theme }) => (theme === true ? "#DFE3FA" : "#7E88C3")};
    font-size: 15px;
    font-weight: 700;
    border: none;
  }

  .buttons-bottom {
    position: sticky;
    /* border: 1px solid red; */
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    /* gap: 8px; */
    padding-right: 23px;
    padding-top: 39px;

    button {
      padding: 16px 24px;
      border: none;
      cursor: pointer;
      border-radius: 24px;
      font-size: 15px;
      font-weight: 700;
    }

    button.discard {
      margin-right: auto;
      background-color: ${({ theme }) =>
        theme === true ? "#F9FAFE" : "#FFFFFF"};
      color: ${({ theme }) => (theme === true ? "#7E88C3" : "#7E88C3")};
    }

    .buttons-right {
      display: flex;
      gap: 8px;

      button.save-as-draft {
        background-color: ${({ theme }) =>
          theme === true ? "#373B53" : "#373B53"};
        color: ${({ theme }) => (theme === true ? "#DFE3FA" : "#888EB0")};
      }
      button.save-send {
        background-color:#7C5DFA;
        color: #FFFFFF ;
      }
    }
    /* margin: 0 56px; */
  }
`;
