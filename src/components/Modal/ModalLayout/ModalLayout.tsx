import { useTranslation } from "react-i18next";
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
} from "./ModalLayout.styled";

type Props = {
  handlerCloseModal: () => void;
  title: string;
  formName: string;
  deleteAction?: () => void;
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
  const { t } = useTranslation();

  return (
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
          <div style={{ display: "flex", gap: "8px", marginLeft: "auto" }}>
            <CancelButtonModal type="button" onClick={handlerCloseModal}>
              {t("Modals.common.cancel")}
            </CancelButtonModal>
            <SubmitButtonModal type="submit" form={formName}>
              {t("Modals.common.save")}
            </SubmitButtonModal>
          </div>
        </ModalActions>
      )}
    </LayoutWrapper>
  );
};

export default ModalLayout;
