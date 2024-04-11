import { useState } from "react";
import data from "../../data.json";
import { InvoiceType } from "../types/InvoiceType.ts";
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

  const updateInvoice = (data: InvoiceType, invoiceToUpdate: InvoiceType) => {
    const invoicesCopy = [...invoices];
    const index = invoices.findIndex(
      (invoice) => invoice.id === invoiceToUpdate.id
    );

    const totalPrice = data?.items.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0);

    const updatedInvoice = {
      ...invoicesCopy[index],
      ...data,
      total: totalPrice,
      status:
        invoicesCopy[index].status === "draft"
          ? "pending"
          : invoicesCopy[index].status,
    };

    invoicesCopy[index] = updatedInvoice;
    setInvoices(invoicesCopy);

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

  const saveAsDraft = (invoice: InvoiceType) => {
    const invoicesCopy = [...invoices];

    setInvoices([
      ...invoicesCopy,
      {
        ...invoice,
        id: getRandomId(),
        status: "draft",
      },
    ]);
  };

  return {
    addInvoice,
    updateInvoice,
    selectedFilter,
    choiceInvoice,
    invoices: filteredInvoices,
    deleteInvoice,
    changeStatusToPaid,
    saveAsDraft,
  };
};
