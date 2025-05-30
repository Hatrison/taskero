import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import Loader from "@/components/Loader";
import { ModalSubmitContext } from "../ModalSubmitContext";
import {
  CancelButtonModal,
  SubmitButtonModal,
  DeleteButtonModal,
} from "@/styles/form/Form.styled";
import {
  LayoutWrapper,
  ModalHeader,
  CloseButton,
  ModalTitle,
  ChildrenWrapper,
  ModalActions,
  MyCloseIcon,
  MainControls,
} from "./ModalLayout.styled";

type Props = {
  handlerCloseModal: () => void;
  title: string;
  formName: string;
  deleteAction?: (() => void) | null;
  withActions?: boolean;
  children: React.ReactNode;
};

const ModalLayout = ({
  handlerCloseModal,
  title,
  formName,
  deleteAction,
  withActions = true,
  children,
}: Props) => {
  const [modalSubmitting, setModalSubmitting] = useState(false);
  const ctxValue = useMemo(() => ({ setModalSubmitting }), []);
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <ModalSubmitContext.Provider value={ctxValue}>
      <LayoutWrapper>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={handlerCloseModal}>
            <MyCloseIcon />
          </CloseButton>
        </ModalHeader>
        <ChildrenWrapper>{children}</ChildrenWrapper>
        {withActions && (
          <ModalActions>
            {deleteAction && (
              <DeleteButtonModal type="button" onClick={() => deleteAction()}>
                {t("Modals.common.delete")}
              </DeleteButtonModal>
            )}
            <MainControls>
              <CancelButtonModal type="button" onClick={handlerCloseModal}>
                {t("Modals.common.cancel")}
              </CancelButtonModal>
              <SubmitButtonModal
                type="submit"
                form={formName}
                disabled={modalSubmitting}
              >
                <span className="btn-text">{t("Modals.common.save")}</span>
                {modalSubmitting && (
                  <div className="btn-loader">
                    <Loader size="16px" color={theme.buttonText} />
                  </div>
                )}
              </SubmitButtonModal>
            </MainControls>
          </ModalActions>
        )}
      </LayoutWrapper>
    </ModalSubmitContext.Provider>
  );
};

export default ModalLayout;
