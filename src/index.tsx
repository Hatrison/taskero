import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { fetchCurrentUser } from "./redux/user/operations";
import { PersistGate } from "redux-persist/integration/react";
import "@/i18n";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Theme from "@/components/Theme";
import App from "@/components/App";
import { LoadContainer } from "@/components/Loader/Loader.styled";
import Loader from "@/components/Loader";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme>
        <PersistGate
          loading={
            <LoadContainer>
              <Loader />
            </LoadContainer>
          }
          persistor={persistor}
          onBeforeLift={async () => {
            await store.dispatch(fetchCurrentUser());
          }}
        >
          <BrowserRouter basename="/taskero">
            <App />
          </BrowserRouter>
        </PersistGate>
      </Theme>
    </Provider>
  </React.StrictMode>
);
