import React, { createContext, useReducer, useContext, useState, useMemo } from 'react';

export const SelectContext = createContext({ isOpen: false });
export const useSelectContext = () => useContext(SelectContext);

export function SelectProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(() => ({ isOpen, setIsOpen }), [isOpen, setIsOpen]);
  return (
    <SelectContext.Provider value={value}>
      {children}
    </SelectContext.Provider>
  );
};