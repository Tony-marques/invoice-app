import {createContext, ReactNode, useContext} from "react";
import {useInvoice} from "../hooks/useInvoice.ts";
import {InvoiceType} from "../types/InvoiceType.ts";

type InvoiceContextProviderProps = {
    children: ReactNode
}

type InvoiceContextType = {
    invoices: InvoiceType[],
    addInvoice: (newInvoice: InvoiceType) => void;
    selectedFilter: string;
    choiceInvoice: (value: string) => void
}

const InvoiceContext = createContext<InvoiceContextType | null>(null);

export const InvoiceContextProvider = ({children}: InvoiceContextProviderProps) => {

    const {
        invoices,
        addInvoice,
        selectedFilter,
        choiceInvoice,
        filteredInvoices
    } = useInvoice();

    const invoiceValue = {
        invoices,
        addInvoice,
        selectedFilter,
        choiceInvoice,
        filteredInvoices
    };

    return <InvoiceContext.Provider value={invoiceValue}>
        {children}
    </InvoiceContext.Provider>;
};

export const useInvoiceContext = () => {
    const context = useContext(InvoiceContext);

    if(!context) {
        throw new Error("useInvoiceContext must be call only on <InvoiceContextProvider/>");
    }

    return context;
};