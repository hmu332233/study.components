import React, { createContext, useContext, useState, useMemo } from 'react';

type SelectContextProps = {
  open: boolean;
  setOpen: (v: boolean) => void;
  selected: string;
  setSelected: (v: string) => void;
};

export const SelectContext = createContext<SelectContextProps>({ open: false, selected: '', setOpen: () => {}, setSelected: () => {} });
export const useSelectContext = () => useContext(SelectContext);
export function SelectProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');

  const value = useMemo(() => ({ open, setOpen: (v: boolean) => setOpen(v), selected, setSelected: (v: string) => setSelected(v) }), [open, setOpen, selected, setSelected]);
  return (
    <SelectContext.Provider value={value}>
      {children}
    </SelectContext.Provider>
  );
};