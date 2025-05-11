import {
  LayoutWrapper,
  ModalHeader,
  CloseButton,
  ModalTitle,
  ModalActions,
  MyCloseIcon,
} from "./ModalLayout.styled";

type Props = {
  handlerCloseModal: () => void;
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
};

const ModalLayout = ({
  handlerCloseModal,
  title,
  children,
  actions,
}: Props) => {
  return (
    <LayoutWrapper>
      <ModalHeader>
        <ModalTitle>{title}</ModalTitle>
        <CloseButton onClick={handlerCloseModal}>
          <MyCloseIcon />
        </CloseButton>
      </ModalHeader>
      {children}
      {actions && <ModalActions>{actions}</ModalActions>}
    </LayoutWrapper>
  );
};

export default ModalLayout;
