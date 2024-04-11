import { createContext, ReactNode, useContext } from "react";
import { useInvoice } from "../hooks/useInvoice.ts";
import { InvoiceType } from "../types/InvoiceType.ts";

type InvoiceContextProviderProps = {
  children: ReactNode;
};

type InvoiceContextType = {
  invoices: InvoiceType[];
  addInvoice: (newInvoice: InvoiceType) => void;
  updateInvoice: (formData: InvoiceType, invoice: InvoiceType) => void;
  selectedFilter: string;
  choiceInvoice: (value: string) => void;
  deleteInvoice: (invoice: string) => void;
  changeStatusToPaid: (invoice: string) => void;
  saveAsDraft: (invoiceId: InvoiceType) => void;
};

const InvoiceContext = createContext<InvoiceContextType | null>(null);

export const InvoiceContextProvider = ({
  children,
}: InvoiceContextProviderProps) => {
  const {
    invoices,
    addInvoice,
    updateInvoice,
    selectedFilter,
    choiceInvoice,
    deleteInvoice,
    changeStatusToPaid,
    saveAsDraft
  } = useInvoice();

  const invoiceValue = {
    invoices,
    addInvoice,
    updateInvoice,
    selectedFilter,
    choiceInvoice,
    deleteInvoice,
    changeStatusToPaid,
    saveAsDraft
  };

  return (
    <InvoiceContext.Provider value={invoiceValue}>
      {children}
    </InvoiceContext.Provider>
  );
};

export const useInvoiceContext = () => {
  const context = useContext(InvoiceContext);

  if (!context) {
    throw new Error(
      "useInvoiceContext must be call only on <InvoiceContextProvider/>"
    );
  }

  return context;
};
