type Props = {
  handlerCloseModal: () => void;
  formName: string;
  projectId: string;
  withActions?: boolean;
};

const EditProjectForm = ({
  handlerCloseModal,
  formName,
  projectId,
  withActions = true,
}: Props) => {
  return <div>EditProjectForm</div>;
};

export default EditProjectForm;
