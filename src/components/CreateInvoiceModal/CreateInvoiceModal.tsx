import {styled} from "styled-components";
import {
    useModalContext
} from "../../contexts/ModalContext.tsx";
import {createPortal} from "react-dom";
import InputText from "./InputText.tsx";
import {SubmitHandler, useForm} from "react-hook-form";
import {
    useInvoiceContext
} from "../../contexts/InvoiceContext.tsx";
import {InvoiceType} from "../../types/InvoiceType.ts";

const CreateInvoiceModal = () => {
    const {modalRef} = useModalContext();
    const {handleSubmit, reset, register} = useForm();
    const {addInvoice} = useInvoiceContext();
    const {showModal} = useModalContext();

    const handleOnSubmit: SubmitHandler<InvoiceType> = (data: InvoiceType) => {
        addInvoice(data);
        reset();
        showModal();
    };

    return createPortal(
        <CreateInvoiceModalStyled
            ref={modalRef}

        >
            <div className="title">New Invoice</div>
            <div className="bill-from">Bill From</div>
            <form method="POST">
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
                    icon={
                        <img src="/assets/icon-calendar.svg"/>}
                    readOnly
                    $variant="button"
                    register={register}
                    name="paymentDue"
                />
                <InputText
                    label="Payment Terms"
                    icon={
                        <img src="/assets/icon-arrow-down.svg"/>}
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
                <button onClick={handleSubmit(handleOnSubmit)}>Save & Send</button>
            </form>
        </CreateInvoiceModalStyled>
        , document.body);
};

export default CreateInvoiceModal;

const CreateInvoiceModalStyled = styled.dialog`
    width: calc(719px - 103px);
    margin-left: 103px;
    height: 100%;
    border: none;
    border-radius: 0 20px 20px 0;
    padding: 59px 56px;
    display: flex;
    flex-direction: column;


    form {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }


    &::backdrop {
        background-color: #00000080;
        margin-left: auto;
        width: calc(100% - 103px);
        height: 800px;
        position: fixed;
        display: flex;
    }

    .item-list {
        font-size: 18px;
        color: #777F98;
        font-weight: 700;
    }
`;