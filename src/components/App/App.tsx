import Loader from "@/components/Loader";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

import Theme from "@/components/Theme";
import GlobalStyle from "@/components/Theme/GlobalStyle.styled";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { fetchCurrentUser } from "@/redux/user/operations";
import { selectIsRefreshing } from "@/redux/auth/selectors";

import Router from "@/routes";
import { LoadContainer } from "./App.styled";

const App = () => {
  const dispatch = useAppDispatch();
  const isRefreshing = useAppSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Theme>
      {isRefreshing ? (
        <LoadContainer>
          <Loader size="60px" color="#000000" />
        </LoadContainer>
      ) : (
        <Router />
      )}
      <GlobalStyle />
      <ToastContainer autoClose={1500} />
    </Theme>
  );
};

export default App;
