import { createContext, ReactNode, RefObject, useContext } from "react";
import { useModal } from "../hooks/useModal.ts";

type ModalContextProviderProps = {
  children: ReactNode;
};

type ModalContextType = {
  showModal: () => void;
  showCreateInvoiceForm: boolean;
  modalRef: RefObject<HTMLDialogElement>;
};

const ModalContext = createContext<ModalContextType | null>(null);

export const ModalContextProvider = ({
  children,
}: ModalContextProviderProps) => {
  const { showModal, showCreateInvoiceForm, modalRef } = useModal();

  const modalValues = {
    showModal,
    showCreateInvoiceForm,
    modalRef,
  };

  return (
    <ModalContext.Provider value={modalValues}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error(
      "useModalContext must be call only on <ModalContextProvider/>"
    );
  }

  return context;
};
