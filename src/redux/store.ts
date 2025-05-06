import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import { authReducer } from "./auth/authSlice";
import { userReducer } from "./user/userSlice";
import { themeReducer } from "./theme/themeSlice";
import { reviewsReducer } from "./reviews/reviewsSlice";

const themePersistConfig = {
  key: "theme",
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  theme: persistReducer(themePersistConfig, themeReducer),
  reviews: reviewsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const baseMiddleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });

    return process.env.NODE_ENV === "development"
      ? baseMiddleware.concat(logger)
      : baseMiddleware;
  },
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
