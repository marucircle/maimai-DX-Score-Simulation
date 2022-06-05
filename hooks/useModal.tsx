import React, { useState, useContext, createContext } from 'react';

const ModalContext = createContext({ isOpen: false, setIsOpen: (value: boolean) => {} });

export const ModalProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return <ModalContext.Provider value={{ isOpen, setIsOpen }}>{children}</ModalContext.Provider>;
};

export const useModal = () => useContext(ModalContext);
