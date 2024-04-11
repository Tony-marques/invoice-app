import { useEffect, useRef, useState } from "react";

export const useModal = () => {
  const [showModal, setShowModal] =
    useState<boolean>(false);
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (showModal) {
      modalRef.current?.show();
    } else {
      modalRef.current?.close();
    }
  }, [showModal]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return {
    showModal: toggleModal,
    modalRef,
  };
};
