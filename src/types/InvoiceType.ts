export type InvoiceType = {
  id?: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status?: "paid" | "pending" | "draft";

  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  items: InvoiceItemsType[];
  total: number;
};

export type InvoiceItemsType = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};
