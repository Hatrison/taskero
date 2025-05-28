import { useEffect, useContext } from "react";
import { useFormikContext } from "formik";
import { ModalSubmitContext } from "@/components/Modal/ModalSubmitContext";

export const FormikSubmitObserver = () => {
  const ctx = useContext(ModalSubmitContext);
  const { isSubmitting } = useFormikContext();

  useEffect(() => {
    ctx?.setModalSubmitting(isSubmitting);
  }, [isSubmitting, ctx]);

  return null;
};
