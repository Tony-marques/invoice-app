import { useState } from "react";
import { InvoiceType } from "../types/InvoiceType.ts";
import data from "../../data.json";
import { getRandomId } from "../utils/functions.ts";

export const useInvoice = () => {
  const [invoices, setInvoices] = useState<InvoiceType[]>(data);
  const [selectedFilter, setSelectedFilter] = useState("");

  const addInvoice = (newInvoice: InvoiceType) => {
    const invoicesCopy = [...invoices];
    setInvoices([
      {
        id: getRandomId(),
        status: "pending",
        ...newInvoice,
      },
      ...invoicesCopy,
    ]);
  };

  const choiceInvoice = (value: string) => {
    setSelectedFilter(value);
  };

  const deleteInvoice = (invoiceToDelete: string) => {
    const invoicesCopy = [...invoices];
    const filteredInvoices = invoicesCopy.filter((item) => {
      return item.id !== invoiceToDelete;
    });
    setInvoices(filteredInvoices);
  };

  const filteredInvoices = invoices.filter((invoice) => {
    if (selectedFilter !== "") {
      return invoice.status === selectedFilter;
    }
    return invoice;
  });

  const changeStatusToPaid = (invoiceId: string) => {
    setInvoices((prev) => {
      return prev.map((item) =>
        item.id !== invoiceId
          ? item
          : {
              ...item,
              status: "paid",
            }
      );
    });
  };

  return {
    addInvoice,
    selectedFilter,
    choiceInvoice,
    invoices: filteredInvoices,
    deleteInvoice,
    changeStatusToPaid,
  };
};
