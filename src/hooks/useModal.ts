import {useEffect, useRef, useState} from "react";

export const useModal = () => {
    const [showCreateInvoiceForm, setShowCreateInvoiceForm] = useState<boolean>(false);
    const modalRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if(showCreateInvoiceForm) {
            modalRef.current?.showModal();
        } else {
            modalRef.current?.close();
        }

    }, [showCreateInvoiceForm]);

    const showModal = () => {
        setShowCreateInvoiceForm(!showCreateInvoiceForm);
    };

    return {
        showModal,
        showCreateInvoiceForm,
        modalRef
    };
};