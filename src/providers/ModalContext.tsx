/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React, { useState } from "react";

export const ModalContext = React.createContext<any>(undefined);
ModalContext.displayName = "Modal Context";

const ModalProvider = (props: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<JSX.Element>();
  const [options, setOptions] = useState<any>({});

  const openModal = (content: JSX.Element, modalOptions: any) => {
    if (content) {
      setModalContent(content);
      setOptions({ ...options, ...modalOptions });
      setIsOpen(true);
    }
  };

  const values = React.useMemo(
    () => ({
      isOpen,
      setIsOpen,
      openModal,
    }),
    [isOpen, modalContent, openModal, options]
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

//Set types on context
