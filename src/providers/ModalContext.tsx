/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React, { useState } from "react";
import { ModalOptions, ModalService } from "../types/types";

export const ModalContext = React.createContext<ModalService | null>(null);
ModalContext.displayName = "Modal Context";

const ModalProvider = (props: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<JSX.Element>(<></>);
  const [options, setOptions] = useState<ModalOptions>({});

  const openModal = (content: JSX.Element, modalOptions: ModalOptions) => {
    if (content) {
      setModalContent(content);
      setOptions({ ...options, ...modalOptions });
      setIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalContent(<></>);
    setOptions({});
    setIsOpen(false);
  };

  const values = React.useMemo(
    () => ({
      openModal,
      closeModal,
    }),
    [isOpen, modalContent, options]
  );

  return (
    <ModalContext.Provider value={values} {...props}>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} maxWidth="md">
        <DialogTitle>{options.title || ""}</DialogTitle>
        <DialogContent>{modalContent}</DialogContent>
      </Dialog>
      {props.children}
    </ModalContext.Provider>
  );
};

const useModalContext = () => {
  const context = React.useContext(ModalContext);
  if (!context) {
    throw new Error(
      `useModalContext must be used within an ${ModalContext.displayName}`
    );
  }
  return context;
};

export { ModalProvider, useModalContext };
