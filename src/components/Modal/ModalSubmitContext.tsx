import { createContext } from "react";

export interface ModalSubmitContextValue {
  setModalSubmitting: (isSubmitting: boolean) => void;
}

export const ModalSubmitContext = createContext<ModalSubmitContextValue | null>(
  null
);
