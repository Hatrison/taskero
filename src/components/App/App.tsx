import Router from "@/routes";
import { ToastContainer } from "react-toastify";
import { useAppSelector } from "@/hooks";
import { selectIsRefreshing } from "@/redux/auth/selectors";
import GlobalStyle from "@/components/Theme/GlobalStyle.styled";
import Loader from "@/components/Loader";
import { LoadContainer } from "./App.styled";

const App = () => {
  const isRefreshing = useAppSelector(selectIsRefreshing);

  return (
    <>
      {isRefreshing ? (
        <LoadContainer>
          <Loader size="60px" color="#3e85f3" />
        </LoadContainer>
      ) : (
        <Router />
      )}
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default App;
