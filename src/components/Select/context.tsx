import React, { createContext, useContext, useState, useMemo } from 'react';

type SelectContextProps = {
  open: boolean;
  setOpen: (v: boolean) => void;
  selected: string;
  setSelected: (v: string) => void;
};

export const SelectContext = createContext<SelectContextProps>({ open: false, selected: '', setOpen: () => {}, setSelected: () => {} });
export const useSelectContext = () => useContext(SelectContext);