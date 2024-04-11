import { FormEvent, useState } from "react";
import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
} from "react-hook-form";
import styled from "styled-components";
import { useInvoiceContext } from "../../contexts/InvoiceContext";
import { useModalContext } from "../../contexts/ModalContext";
import { useThemeContext } from "../../contexts/ThemeContext";
import { InvoiceItemsType, InvoiceType } from "../../types/InvoiceType";
import InputText from "../InputText/InputText";
import Item from "../Item/Item";

type FormProps = {
  handleDiscard?: (e: FormEvent<HTMLButtonElement>) => void;
  handleSaveAsDraft?: (data: InvoiceType) => void;
  invoice?: InvoiceType;
  reset: UseFormReset<FieldValues>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
};

type FormStyled = {
  theme: boolean;
};

const Form = ({
  handleDiscard,
  handleSaveAsDraft,
  reset,
  register,
  handleSubmit,
  invoice,
}: FormProps) => {
  const { addInvoice, updateInvoice } = useInvoiceContext();
  const { showModal } = useModalContext();
  const { theme } = useThemeContext();

  const [items, setItems] = useState<
    {
      name: string;
      quantity: number;
      price: number;
      total: number;
    }[]
  >([]);

  const addItemInput = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setItems((prev) => {
      return [
        ...prev,
        {
          name: "",
          quantity: 0,
          price: 0,
          total: 0,
        },
      ];
    });
  };

  const handleCreate: SubmitHandler<InvoiceType> = (data: InvoiceType) => {
    addInvoice(data);
    reset();
    showModal();
  };

  const handleEdit: SubmitHandler<InvoiceType> = (data: InvoiceType) => {
    updateInvoice(data, invoice as InvoiceType);
    reset();
    showModal();
    setItems([]);
  };

  const inputsConfig = [
    {
      id: 0,
      label: "Street Address",
      $size: "full-width",
      name: "senderAddress.street",
      value: invoice ? invoice.senderAddress.street : "",
    },
    {
      id: 1,
      label: "City",
      $size: "one-third",
      name: "senderAddress.city",
      value: invoice ? invoice.senderAddress.city : "",
    },
    {
      id: 2,
      label: "Post Code",
      $size: "one-third",
      name: "senderAddress.postCode",
      value: invoice ? invoice.senderAddress.postCode : "",
    },
    {
      id: 3,
      label: "Country",
      $size: "one-third",
      name: "senderAddress.country",
      value: invoice ? invoice.senderAddress.country : "",
    },
    {
      id: 4,
      label: "Client's Name",
      $size: "full-width",
      name: "clientName",
      value: invoice ? invoice.clientName : "",
    },
    {
      id: 5,
      label: "Client's Email",
      $size: "full-width",
      name: "clientEmail",
      value: invoice ? invoice.clientEmail : "",
    },
    {
      id: 6,
      label: "Street Address",
      $size: "full-width",
      name: "clientAddress.street",
      value: invoice ? invoice.clientAddress.street : "",
    },
    {
      id: 7,
      label: "City",
      $size: "one-third",
      name: "clientAddress.city",
      value: invoice ? invoice.clientAddress.city : "",
    },
    {
      id: 8,
      label: "Post Code",
      $size: "one-third",
      name: "clientAddress.postCode",
      value: invoice ? invoice.clientAddress.postCode : "",
    },
    {
      id: 9,
      label: "Country",
      $size: "one-third",
      name: "clientAddress.country",
      value: invoice ? invoice.clientAddress.country : "",
    },
    {
      id: 10,
      label: "Invoice Date",
      $size: "half",
      name: "paymentDue",
      icon: <img src="/assets/icon-calendar.svg" />,
      readOnly: true,
      $variant: "button",
      value: invoice ? invoice.createdAt : "",
    },
    {
      id: 11,
      label: "Payment Terms",
      $size: "half",
      name: "paymentTerms",
      icon: <img src="/assets/icon-arrow-down.svg" />,
      readOnly: true,
      $variant: "button",
      value: invoice ? invoice.paymentDue : "",
    },
    {
      id: 12,
      label: "Project Description",
      $size: "full-width",
      name: "description",
      value: invoice ? invoice.description : "",
    },
  ];

  return (
    <FormStyled method="POST" theme={theme}>
      <div className="form-content">
        {inputsConfig
          .slice(0, 4)
          .map(
            ({ id, label, $size, name, icon, readOnly, value, $variant }) => (
              <InputText
                key={id}
                label={label}
                $size={$size}
                name={name}
                register={register}
                icon={icon}
                readOnly={readOnly}
                $variant={$variant}
                value={value}
              />
            )
          )}

        <div className="bill-to">Bill To</div>

        {inputsConfig
          .slice(4)
          .map(
            ({ id, label, $size, name, icon, readOnly, value, $variant }) => (
              <InputText
                key={id}
                label={label}
                $size={$size}
                name={name}
                register={register}
                icon={icon}
                readOnly={readOnly}
                $variant={$variant}
                value={value}
              />
            )
          )}
        <div className="item-list">Item List</div>
        <div className="item-header">
          <div className="item-name">Item Name</div>
          <div className="item-quantity">Qty.</div>
          <div className="item-price">Price</div>
          <div className="item-total">Total</div>
        </div>
        <div className="items-container">
          {invoice
            ? ([...(invoice?.items as InvoiceItemsType[]), ...items].map(
                ({ name, quantity, price, total }, index) => {
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
                }
              ))
            : (items.map(({ name, quantity, price, total }, index) => {
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
              }))}
        </div>

        <button onClick={addItemInput} className="add-new-item">
          + add new item
        </button>
      </div>
      <div className="buttons-bottom">
        {!invoice && (
          <button className="discard" onClick={handleDiscard}>
            Discard
          </button>
        )}

        <div
          className="buttons-right"
          style={{ marginLeft: invoice ? "auto" : "" }}
        >
          {!invoice && (
            <>
              <button
                className="save-as-draft"
                onClick={handleSubmit(handleSaveAsDraft)}
              >
                Save as Draft
              </button>

              <button
                className="save-send"
                onClick={handleSubmit(handleCreate)}
              >
                Save & Send
              </button>
            </>
          )}
          {invoice && (
            <>
              <button className="save-as-draft" onClick={handleDiscard}>
                Cancel
              </button>
              <button className="save-send" onClick={handleSubmit(handleEdit)}>
                Save Changes
              </button>
            </>
          )}
        </div>
      </div>
    </FormStyled>
  );
};

export default Form;

const FormStyled = styled.form<FormStyled>`
  overflow-y: scroll;
  scrollbar-color: ${({ theme }) => (theme === true ? "#252945" : "#DFE3FA")}
    transparent;
  scrollbar-width: thin;
  padding-right: 15px;

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

  .item-list {
    font-size: 18px;
    color: #777f98;
    font-weight: 700;
    width: 100%;
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
    background-color: ${({ theme }) => (theme === true ? "#141625" : "#FFF")};
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    padding-top: 39px;
    /* border: 1px solid red; */

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
        theme === true ? "##ffffff" : "##F9FAFE"};
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
        background-color: #7c5dfa;
        color: #ffffff;
      }
    }
  }
`;
