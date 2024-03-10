import {useState} from "react";
import {InvoiceType} from "../types/InvoiceType.ts";
import data from "../../data.json";
import {getRandomId} from "../utils/functions.ts";

export const useInvoice = () => {
    const [invoices, setInvoices] = useState<InvoiceType[]>(data);
    const [selectedFilter, setSelectedFilter] = useState("");
    const addInvoice = (newInvoice: InvoiceType) => {
        const invoicesCopy = [...invoices];
        setInvoices([{id: getRandomId(), status: "pending", ...newInvoice}, ...invoicesCopy]);
    };

    const choiceInvoice = (value: string) => {
        setSelectedFilter(value)
    }

    return {
        invoices,
        addInvoice,
        selectedFilter,
        choiceInvoice
    };
};