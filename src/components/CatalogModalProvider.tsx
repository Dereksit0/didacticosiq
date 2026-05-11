"use client";
import { createContext, useContext, useState, type ReactNode } from "react";
import CatalogModal from "./CatalogModal";

export interface ModalItem {
  brand: string;
  link: string;
  gradient: string;
}

interface ContextType {
  openModal: (item: ModalItem) => void;
}

const CatalogModalContext = createContext<ContextType>({ openModal: () => {} });

export function useCatalogModal() {
  return useContext(CatalogModalContext);
}

export default function CatalogModalProvider({ children }: { children: ReactNode }) {
  const [item, setItem] = useState<ModalItem | null>(null);

  return (
    <CatalogModalContext.Provider value={{ openModal: setItem }}>
      {children}
      <CatalogModal catalog={item} onClose={() => setItem(null)} />
    </CatalogModalContext.Provider>
  );
}
